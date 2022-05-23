import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dtos/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './roles.model'

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

	public async createRole(dto: CreateRoleDto) {
		return await this.rolesRepository.create(dto)
	}

	public async getRoleByValue(value: string) {
		return await this.rolesRepository.findOne({ where: { value } })
	}
}
