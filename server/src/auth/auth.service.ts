import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { MailService } from './mail.service'
import { JwtService } from '@nestjs/jwt'
import { Token } from './tokens.model'
import { UserDto } from './dtos/user.dto'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		@InjectModel(Token) private tokenRepository: typeof Token,
		private usersService: UsersService,
		private mailService: MailService,
		private jwtService: JwtService,
	) {}

	public async register(dto) {
		try {
			const candidate = await this.userRepository.findOne({
				where: { email: dto.email },
			})
			if (candidate) {
				return new HttpException('User already exists', HttpStatus.BAD_REQUEST)
			}
			const hashPassword = await bcrypt.hash(dto.password, 3)
			const activationLink = uuidv4()
			const user = await this.usersService.createUser({
				...dto,
				password: hashPassword,
				activationLink,
			})
			await this.mailService.sendActivationMail({
				email: dto.email,
				link: activationLink,
			})
			const userDto = new UserDto(user)
			const tokens = await this.generateTokes({ ...userDto })
			await this.saveToken(userDto.id, tokens.refreshToken)
			return {
				...tokens,
				user: userDto,
				userName: dto.userName,
			}
		} catch (e) {
			throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST)
		}
	}

	public async login() {}

	public async logout() {}

	public async activate() {}

	public async refresh() {}

	private async generateTokes(payload) {
		const accessToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_ACCESS_SECRET,
			expiresIn: '30m',
		})
		const refreshToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_REFRESH_SECRET,
			expiresIn: '30d',
		})
		return {
			accessToken,
			refreshToken,
		}
	}

	private async saveToken(userId, refreshToken) {
		const tokenData = await this.tokenRepository.findOne({ where: { userId } })
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}
		return await this.tokenRepository.create({ refreshToken, userId })
	}
}
