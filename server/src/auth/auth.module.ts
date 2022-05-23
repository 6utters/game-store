import { forwardRef, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MailService } from './mail.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { Token } from './tokens.model'
import { JwtService } from '@nestjs/jwt'
import { UsersModule } from '../users/users.module'
import { RolesModule } from '../roles/roles.module'

@Module({
	controllers: [AuthController],
	providers: [AuthService, MailService, JwtService],
	imports: [
		SequelizeModule.forFeature([User, Token]),
		RolesModule,
		forwardRef(() => UsersModule),
	],
	exports: [AuthService],
})
export class AuthModule {}
