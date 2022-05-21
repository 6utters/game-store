import { Injectable } from '@nestjs/common'
import { MailDto } from './dtos/mail.dto'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	public async sendActivationMail(mailDto: MailDto) {
		await this.mailerService.sendMail({
			to: mailDto.email,
			subject: `Activate your account on ${process.env.API_URL}`,
			template: '/email',
			context: {
				link: mailDto.link,
			},
		})
	}
}
