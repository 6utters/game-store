import { forwardRef, Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './entities/users.model'
import { AuthModule } from '../auth/auth.module'
import { Role } from '../roles/entities/roles.model'
import { UserRoles } from '../roles/entities/user-roles.model'
import { RolesModule } from '../roles/roles.module'
import { Cart } from '../carts/entities/carts.model'

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		SequelizeModule.forFeature([User, Role, UserRoles, Cart]),
		forwardRef(() => AuthModule),
		RolesModule,
	],
	exports: [UsersService],
})
export class UsersModule {}
