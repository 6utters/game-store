import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { MailDto } from './dtos/mail.dto'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	public async sendActivationMail(mailDto: MailDto): Promise<void> {
		try {
			await this.mailerService.sendMail({
				to: mailDto.email,
				subject: `Activate your account on ${process.env.API_URL}`,
				template: '/email',
				context: {
					link: mailDto.link,
				},
			})
		} catch (e) {
			throw new HttpException('Mail error', HttpStatus.BAD_REQUEST)
		}
	}
}
