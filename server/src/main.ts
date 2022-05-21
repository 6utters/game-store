import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from './pipes/validation.pipe'

async function bootstrap() {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors()
	app.use(cookieParser())
	app.useGlobalPipes(new ValidationPipe())
	await app.listen(PORT, () =>
		console.log(`Server has been started on port ${PORT}...`),
	)
}

void bootstrap()
