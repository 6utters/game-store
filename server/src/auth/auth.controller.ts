import {
	Body,
	Controller,
	Get,
	Next,
	Param,
	Post,
	Req,
	Res,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../users/dtos/create-user.dto'
import { LoginUserDto } from '../users/dtos/login-user.dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('register')
	async register(
		@Body() userDto: CreateUserDto,
		@Res() response,
		@Next() next,
	) {
		try {
			const userData = await this.authService.register(userDto)
			await response.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return response.json(userData)
		} catch (e) {
			next(e)
		}
	}

	@Post('login')
	async login(@Body() userDto: LoginUserDto, @Res() response, @Next() next) {
		try {
			const userData = await this.authService.login(userDto)
			await response.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return response.json(userData)
		} catch (e) {
			next(e)
		}
	}

	@Post('logout')
	async logout(@Req() request, @Res() response, @Next() next) {
		try {
			const { refreshToken } = request.cookies
			const token = await this.authService.logout(refreshToken)
			response.clearCookie('refreshToken')
			return response.json(token)
		} catch (e) {
			next(e)
		}
	}

	@Get('activate/:link')
	activate(@Param('link') link: string, @Res() response, @Next() next) {
		try {
			this.authService.activate(link).then()
			return response.redirect(process.env.CLIENT_URL)
		} catch (e) {
			next(e)
		}
	}

	@Get('refresh')
	async refresh(@Req() request, @Res() response, @Next() next) {
		try {
			const { refreshToken } = request.cookies
			const userData = await this.authService.refresh(refreshToken)
			response.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return response.json(userData)
		} catch (e) {
			next(e)
		}
	}
}
