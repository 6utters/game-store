import { Injectable } from '@nestjs/common'
import { IMediaFileResponse } from './mediafile.interface'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'

@Injectable()
export class FilesService {
	// public async createFile(file, ext: string): Promise<string> {
	// 	try {
	// 		const fileName = uuid.v4() + ext
	// 		const filePath = path.resolve(__dirname, '..', 'static')
	// 		if (!fs.existsSync(filePath)) {
	// 			fs.mkdirSync(filePath, { recursive: true })
	// 		}
	// 		fs.writeFileSync(path.join(filePath, fileName), file.buffer)
	// 		return fileName
	// 	} catch (e) {
	// 		throw new HttpException(
	// 			'Upload file error',
	// 			HttpStatus.INTERNAL_SERVER_ERROR,
	// 		)
	// 	}
	// }
	public async saveMedia(
		mediaFile: Express.Multer.File,
		folder = 'default',
	): Promise<IMediaFileResponse> {
		const uploadFolder = `${path}/uploads/${folder}`
		await ensureDir(uploadFolder)

		await writeFile(
			`${uploadFolder}/${mediaFile.originalname}`,
			mediaFile.buffer,
		)
		return {
			url: `/uploads/${folder}/${mediaFile.originalname}`,
		}
	}
}
