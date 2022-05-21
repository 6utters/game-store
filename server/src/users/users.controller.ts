import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto)
	}

	@Get()
	getAllUsers() {
		return this.usersService.getUsers()
	}

	// @Get()
	// getByEmail(@Body() email: string) {
	// 	return this.usersService.getUserByEmail(email)
	// }
}
