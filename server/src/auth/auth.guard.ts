// noinspection ExceptionCaughtLocallyJS

import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { TokensService } from './tokens.service'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private tokenService: TokensService,
	) {}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		try {
			const req = context.switchToHttp().getRequest()
			const authorizationHeader = req.headers.authorization
			if (!authorizationHeader) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			const accessToken = authorizationHeader.split(' ')[1]
			if (!accessToken) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			const userData = this.tokenService.validateAccessToken(accessToken)
			console.log('data', userData)
			if (!userData) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			req.user = userData
			return true
		} catch (e) {
			throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
		}
	}
}
