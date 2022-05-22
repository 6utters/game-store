import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MailService } from './mail.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { UsersService } from '../users/users.service'
import { Token } from './tokens.model'
import { JwtService } from '@nestjs/jwt'

@Module({
	controllers: [AuthController],
	providers: [AuthService, MailService, UsersService, JwtService],
	imports: [SequelizeModule.forFeature([User, Token])],
	exports: [AuthService],
})
export class AuthModule {}
