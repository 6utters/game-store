import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
	app.use(cookieParser())
	// src.useGlobalPipes(new ValidationPipe())
	await app.listen(PORT, () =>
		console.log(`Server has been started on port ${PORT}...`),
	)
}

void bootstrap()
