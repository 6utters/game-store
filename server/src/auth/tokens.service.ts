import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../users/entities/users.model'
import { UsersService } from '../users/users.service'
import { MailService } from './mail.service'
import { JwtService } from '@nestjs/jwt'
import { Token } from './entities/tokens.model'
import { UserDto } from './dtos/user.dto'

@Injectable()
export class TokensService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		@InjectModel(Token) private tokenRepository: typeof Token,
		private usersService: UsersService,
		private mailService: MailService,
		private jwtService: JwtService,
	) {}

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

	public validateRefreshToken(refreshToken: string) {
		try {
			return this.jwtService.verify(refreshToken, {
				secret: process.env.JWT_REFRESH_SECRET,
			})
		} catch (e) {
			return null
		}
	}

	public async findToken(refreshToken: string) {
		return await this.tokenRepository.findOne({
			where: { refreshToken },
		})
	}

	public async removeToken(refreshToken: string) {
		return await this.tokenRepository.destroy({
			where: { refreshToken },
		})
	}

	public async generateTokes(payload) {
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

	public async saveToken(userId, refreshToken) {
		const tokenData = await this.tokenRepository.findOne({ where: { userId } })
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}
		return await this.tokenRepository.create({ refreshToken, userId })
	}
}
