import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserDto } from '../auth/dtos/user.dto'

export const CurrentUser = createParamDecorator(
	(data: keyof UserDto, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user

		return data ? user?.[data] : user
	},
)
