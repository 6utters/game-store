import { forwardRef, Module } from '@nestjs/common'
import { RolesController } from './roles.controller'
import { RolesService } from './roles.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from './entities/roles.model'
import { User } from '../users/entities/users.model'
import { UserRoles } from './entities/user-roles.model'
import { AuthModule } from '../auth/auth.module'

@Module({
	controllers: [RolesController],
	providers: [RolesService],
	imports: [
		SequelizeModule.forFeature([Role, User, UserRoles]),
		forwardRef(() => AuthModule),
	],
	exports: [RolesService],
})
export class RolesModule {}
