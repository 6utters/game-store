import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dtos/create-role.dto'
import { Roles } from './roles-auth.decorator'
import { AuthGuard } from '../auth/auth.guard'

@Controller('roles')
export class RolesController {
	constructor(private rolesService: RolesService) {}

	@Roles('ADMIN')
	@UseGuards(AuthGuard)
	@Post()
	createRole(@Body() roleDto: CreateRoleDto) {
		return this.rolesService.createRole(roleDto)
	}

	@Get('/:value')
	getByValue(@Param('value') value: string) {
		return this.rolesService.getRoleByValue(value)
	}
}
