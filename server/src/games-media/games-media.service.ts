import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Game_media } from './entities/games-media.model'
import { CreateMediaDto } from './dtos/create-media.dto'

@Injectable()
export class GamesMediaService {
	constructor(
		@InjectModel(Game_media) private gameMediaRepository: typeof Game_media,
	) {}

	public async createMedia(dto: CreateMediaDto) {
		return await this.gameMediaRepository.create(dto)
	}
}
