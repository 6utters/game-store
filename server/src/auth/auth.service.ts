import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../users/entities/users.model'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { MailService } from './mail.service'
import { JwtService } from '@nestjs/jwt'
import { Token } from './entities/tokens.model'
import { UserDto } from './dtos/user.dto'
import { RolesService } from '../roles/roles.service'
import { TokensService } from './tokens.service'
import { CartsService } from '../carts/carts.service'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		@InjectModel(Token) private tokenRepository: typeof Token,
		private usersService: UsersService,
		private mailService: MailService,
		private jwtService: JwtService,
		private rolesService: RolesService,
		private tokenService: TokensService,
		private cartsService: CartsService,
	) {}

	public async register(dto) {
		const candidate = await this.usersService.findUserByEmail(dto.email)
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
		const cart = await this.cartsService.createCart()
		await user.$set('cart', [cart.id])
		const role = await this.rolesService.getRoleByValue('USER')
		await user.$set('roles', [role.id])
		user.roles = [role]
		// await this.mailService.sendActivationMail({
		// 	email: dto.email,
		// 	link: `${process.env.API_URL}/api/auth/activate/${activationLink}`,
		// })
		const userDto = new UserDto(user)
		const tokens = await this.tokenService.generateTokes({ ...userDto })
		await this.tokenService.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
		}
	}

	public async login(dto) {
		const user = await this.usersService.findUserByEmail(dto.email)
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
		console.log('user:', user)
		const userDto = new UserDto(user)
		const tokens = await this.tokenService.generateTokes({ ...userDto })
		await this.tokenService.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
		}
	}

	public async logout(refreshToken: string) {
		return await this.tokenService.removeToken(refreshToken)
	}

	public async activate(activationLink: string): Promise<void> {
		const user = await this.userRepository.findOne({
			where: { activationLink },
		})
		if (!user) {
			throw new HttpException('Invalid link', HttpStatus.BAD_REQUEST)
		}
		user.isActivated = true
		await user.save()
	}
}
