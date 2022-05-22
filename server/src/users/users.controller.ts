import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UsersService } from './users.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto)
	}

	@Get()
	@UseGuards(AuthGuard)
	getAllUsers() {
		return this.usersService.getUsers()
	}

	// @Get()
	// getByEmail(@Body() email: string) {
	// 	return this.usersService.getUserByEmail(email)
	// }
}
