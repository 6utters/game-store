import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UsersService } from './users.service'
import { AuthGuard } from '../auth/auth.guard'
import { Roles } from '../roles/roles-auth.decorator'
import { RolesGuard } from '../roles/roles.guard'
import { AddRoleDto } from './dtos/add-role.dto'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto)
	}

	@Roles('ADMIN')
	@UseGuards(AuthGuard, RolesGuard)
	@Get()
	getAllUsers() {
		return this.usersService.getUsers()
	}

	@Roles('ADMIN')
	@UseGuards(AuthGuard, RolesGuard)
	@Post('role')
	addRole(@Body() dto: AddRoleDto) {
		return this.usersService.addRole(dto)
	}
}
