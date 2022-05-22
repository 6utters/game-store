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
		const candidate = await this.userRepository.findOne({
			where: { email: dto.email },
		})
		if (candidate) {
			throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
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
			link: `${process.env.API_URL}/api/auth/activate/${activationLink}`,
		})
		const userDto = new UserDto(user)
		const tokens = await this.generateTokes({ ...userDto })
		await this.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
			userName: dto.userName,
		}
	}

	public async login(dto) {
		const user = await this.userRepository.findOne({
			where: { email: dto.email },
		})
		if (!user) {
			throw new HttpException(
				'Invalid email or password',
				HttpStatus.BAD_REQUEST,
			)
		}
		const isPassEqual = await bcrypt.compare(dto.password, user.password)
		if (!isPassEqual) {
			throw new HttpException(
				'Invalid email or password',
				HttpStatus.BAD_REQUEST,
			)
		}
		const userDto = new UserDto(user)
		const tokens = await this.generateTokes({ ...userDto })
		await this.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
			userName: dto.userName,
		}
	}

	public async logout(refreshToken: string) {
		return await this.removeToken(refreshToken)
	}

	public async activate(activationLink: string) {
		const user = await this.userRepository.findOne({
			where: { activationLink },
		})
		if (!user) {
			throw new HttpException('Invalid link', HttpStatus.BAD_REQUEST)
		}
		user.isActivated = true
		await user.save()
	}

	public async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
		}
		const userData = await this.validateRefreshToken(refreshToken)
		const currentToken = await this.findToken(refreshToken)
		if (!userData || !currentToken) {
			throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
		}
		const user = await this.userRepository.findOne({
			where: { id: userData.id },
		})
		const userDto = new UserDto(user)
		const tokens = await this.generateTokes({ ...userDto })
		await this.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
		}
	}

	public validateAccessToken(accessToken: string) {
		try {
			return this.jwtService.verify(accessToken, {
				secret: process.env.JWT_ACCESS_SECRET,
			})
		} catch (e) {
			return null
		}
	}

	private validateRefreshToken(refreshToken: string) {
		try {
			return this.jwtService.verify(refreshToken, {
				secret: process.env.JWT_REFRESH_SECRET,
			})
		} catch (e) {
			return null
		}
	}

	private async findToken(refreshToken: string) {
		return await this.tokenRepository.findOne({
			where: { refreshToken },
		})
	}

	private async removeToken(refreshToken: string) {
		return await this.tokenRepository.destroy({
			where: { refreshToken },
		})
	}

	private async generateTokes(payload) {
		const accessToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_ACCESS_SECRET,
			expiresIn: '15s',
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
