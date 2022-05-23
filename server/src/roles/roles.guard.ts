// noinspection ExceptionCaughtLocallyJS

import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthService } from '../auth/auth.service'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from './roles-auth.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private authService: AuthService, private reflector: Reflector) {}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		try {
			const requiredRoles = this.reflector.getAllAndOverride<string[]>(
				ROLES_KEY,
				[context.getHandler(), context.getClass()],
			)
			if (!requiredRoles) {
				return true
			}
			const req = context.switchToHttp().getRequest()
			const authorizationHeader = req.headers.authorization
			if (!authorizationHeader) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			const accessToken = authorizationHeader.split(' ')[1]
			if (!accessToken) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			const userData = this.authService.validateAccessToken(accessToken)
			if (!userData) {
				throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
			}
			req.user = userData
			return userData.roles.some((role) => requiredRoles.includes(role.value))
		} catch (e) {
			throw new HttpException('No access', HttpStatus.FORBIDDEN)
		}
	}
}
