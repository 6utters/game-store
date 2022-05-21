import { Injectable } from '@nestjs/common'
import { MailDto } from './dtos/mail.dto'

@Injectable()
export class MailService {
	public async sendActivationMail(mailDto: MailDto) {}
}
