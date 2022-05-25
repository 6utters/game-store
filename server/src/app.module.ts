import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { User } from './users/entities/users.model'
import { join, resolve } from 'path'
import { AuthModule } from './auth/auth.module'
import { Token } from './auth/entities/tokens.model'
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/entities/roles.model'
import { UserRoles } from './roles/entities/user-roles.model'
import { GamesModule } from './games/games.module'
import { Game } from './games/entities/games.model'
import { FilesModule } from './files/files.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { CartsModule } from './carts/carts.module'
import { Cart } from './carts/entities/carts.model'
import { CartGames } from './carts/entities/cart-games.model'

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`,
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [User, Token, Role, UserRoles, Game, Cart, CartGames],
			autoLoadModels: true,
			synchronize: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, 'static'),
		}),
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => ({
				transport: {
					host: config.get('SMTP_HOST'),
					secure: false,
					auth: {
						user: config.get('SMTP_USER'),
						pass: config.get('SMTP_PASSWORD'),
					},
				},
				defaults: {
					from: config.get('SMTP_USER'),
				},
				template: {
					dir: join(__dirname, './templates'),
					adapter: new HandlebarsAdapter(),
					options: {
						strict: true,
					},
				},
			}),
			inject: [ConfigService],
		}),
		UsersModule,
		AuthModule,
		RolesModule,
		GamesModule,
		FilesModule,
		CartsModule,
	],
})
export class AppModule {}
