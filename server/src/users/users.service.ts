import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private userRepository: typeof User) {}

	public async createUser(dto: CreateUserDto) {
		return await this.userRepository.create(dto)
	}

	public async getUsers() {
		return await this.userRepository.findAll({ include: { all: true } })
	}
}
