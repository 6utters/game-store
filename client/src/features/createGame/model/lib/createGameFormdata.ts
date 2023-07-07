import FormData from 'form-data'
import { GameAbout, GameInfo } from '@/entities/Game'

export const createGameBaseFD = (
	gameName: string,
	gamePrice: number,
	currentFile: File | null,
	currentGenreOptions: string[],
	currentFeatureOptions: string[],
) => {
	const formData = new FormData()
	formData.append('gameName', gameName)
	formData.append('gamePrice', gamePrice)
	formData.append('gameImage', currentFile)
	formData.append('genreNames', JSON.stringify(currentGenreOptions))
	formData.append('featureNames', JSON.stringify(currentFeatureOptions))
	return formData
}

export const createGameInfoFD = (data: GameInfo) => ({
	developer: data.developer,
	publisher: data.publisher,
	releaseDate: data.releaseDate,
	os: data.os,
	processor: data.processor,
	memory: data.memory,
	storage: data.storage,
	graphics: data.graphics,
})

export const createGameAboutInfoFD = (data: GameAbout) => ({
	mainInfo: data.mainInfo,
	fstP: data.fstP,
	sndP: data.sndP,
	thdP: data.thdP,
	ftsP: data.ftsP,
	thsP: data.thsP,
})

export const createGameMediaFD = (currentVideos: File[]) => {
	const formVideosData = new FormData()
	for (let i = 0; i < currentVideos.length; i++) {
		formVideosData.append('media', currentVideos[i])
	}
	return formVideosData
}

// export const createGameImagesFD = (currentImages: File[]) => {
// 	const formImagesData = new FormData()
// 	for (let i = 0; i < currentImages.length; i++) {
// 		formImagesData.append('media', currentImages[i])
// 	}
// 	return formImagesData
// }
