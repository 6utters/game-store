import FormData from 'form-data'
import { UnpackNestedValue } from 'react-hook-form'
import { IGameForm } from '../../../../../models/IGameForm'
import { Dispatch, SetStateAction } from 'react'

export const createGameFormData = (
	data: UnpackNestedValue<IGameForm>,
	currentFile: File | null,
	currentGenreOptions: string[],
	currentFeatureOptions: string[],
) => {
	const formData = new FormData()
	formData.append('gameName', data.gameName)
	formData.append('gamePrice', `${data.gamePrice}`)
	formData.append('gameImage', currentFile)
	formData.append('genreNames', JSON.stringify(currentGenreOptions))
	formData.append('featureNames', JSON.stringify(currentFeatureOptions))
	return formData
}

export const createGameInfoFormData = (
	gameId: number,
	data: UnpackNestedValue<IGameForm>,
) => ({
	gameId,
	developer: data.developer,
	publisher: data.publisher,
	releaseDate: data.releaseDate,
	os: data.os,
	processor: data.processor,
	memory: data.memory,
	storage: data.storage,
	graphics: data.graphics,
})

export const createGameAboutInfoFormData = (
	gameId: number,
	data: UnpackNestedValue<IGameForm>,
) => ({
	gameId,
	mainInfo: data.mainInfo,
	fstP: data.fstP,
	sndP: data.sndP,
	thdP: data.thdP,
	ftsP: data.ftsP,
	thsP: data.thsP,
})

export const createFormVideosData = (currentVideos: File[]) => {
	const formVideosData = new FormData()
	for (let i = 0; i < currentVideos.length; i++) {
		formVideosData.append('media', currentVideos[i])
	}
	return formVideosData
}

export const createFormImagesData = (currentImages: File[]) => {
	const formImagesData = new FormData()
	for (let i = 0; i < currentImages.length; i++) {
		formImagesData.append('media', currentImages[i])
	}
	return formImagesData
}

export const selectVideos = (
	e: any,
	setCurrentVideos: Dispatch<SetStateAction<File[]>>,
) => {
	const videos: File[] = []
	for (let i = 0; i < Object.keys(e.target.files).length; i++)
		videos.push(e.target.files[i])
	setCurrentVideos(videos)
}

export const selectImages = (
	e: any,
	setCurrentImages: Dispatch<SetStateAction<File[]>>,
) => {
	const images: File[] = []
	for (let i = 0; i < Object.keys(e.target.files).length; i++)
		images.push(e.target.files[i])
	setCurrentImages(images)
}

export const selectFile = (
	e: any,
	setCurrentFile: Dispatch<SetStateAction<File | null>>,
) => {
	setCurrentFile(e.target.files[0])
}
