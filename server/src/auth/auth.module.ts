import { forwardRef, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MailService } from './mail.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/entities/users.model'
import { Token } from './entities/tokens.model'
import { JwtService } from '@nestjs/jwt'
import { UsersModule } from '../users/users.module'
import { RolesModule } from '../roles/roles.module'
import { TokensService } from './tokens.service'
import { CartsModule } from '../carts/carts.module'

@Module({
	controllers: [AuthController],
	providers: [AuthService, MailService, JwtService, TokensService],
	imports: [
		SequelizeModule.forFeature([User, Token]),
		RolesModule,
		forwardRef(() => CartsModule),
		forwardRef(() => UsersModule),
	],
	exports: [AuthService, TokensService],
})
export class AuthModule {}
