import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('register')
	async register(@Body() userDto: CreateUserDto, @Res() response) {
		const userData = await this.authService.register(userDto)
		await response.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		})
		return response.json(userData)
	}

	@Post()
	login() {
		return this.authService.login()
	}

	@Post()
	logout() {
		return this.authService.logout()
	}

	@Get('activate/:link')
	activate() {
		return this.authService.activate()
	}

	@Post()
	refresh() {
		return this.authService.refresh()
	}
}
