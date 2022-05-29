import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './entities/users.model'
import { CreateUserDto } from './dtos/create-user.dto'
import { AddRoleDto } from './dtos/add-role.dto'
import { RolesService } from '../roles/roles.service'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		private roleService: RolesService,
	) {}

	public async createUser(dto: CreateUserDto): Promise<User> {
		return await this.userRepository.create(dto)
	}

	public async findUserByEmail(email: string): Promise<User> {
		return await this.userRepository.findOne({
			where: { email },
			include: { all: true },
		})
	}

	public async findUserById(id: number): Promise<User> {
		return await this.userRepository.findByPk(id, { include: { all: true } })
	}

	public async getUsers(): Promise<User[]> {
		return await this.userRepository.findAll({ include: { all: true } })
	}

	public async addRole(dto: AddRoleDto): Promise<AddRoleDto> {
		const user = await this.userRepository.findByPk(dto.userId)
		const role = await this.roleService.getRoleByValue(dto.value)
		if (user && role) {
			await user.$add('role', role.id)
			return dto
		}
		throw new HttpException(
			"User of Role hasn't been found",
			HttpStatus.NOT_FOUND,
		)
	}
}
