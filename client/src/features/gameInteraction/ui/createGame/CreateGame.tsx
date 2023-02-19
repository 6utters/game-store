import { FC, memo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreateGameSchema, useCreateGame } from '@/features/gameInteraction'
import { FeaturesSelector } from './featuresSelector/FeaturesSelector'
import CreateGameService from '@/features/gameInteraction/model/services/createGameService'

import { GenresSelector } from './genresSelector/GenresSelector'
import { MainGameInfoForm } from './mainGameInfoForm/MainGameInfoForm'
import { GameMediaForm } from './gameMediaForm/GameMediaForm'
import { GameRequirementsForm } from './gameRequirementsForm/GameRequirementsForm'
import { GameAboutForm } from './gameAboutForm/GameAboutForm'

import {
	createFormImagesData,
	createFormVideosData,
	createGameAboutInfoFormData,
	createGameFormData,
	createGameInfoFormData,
} from '../../model/lib/createGameFormdata'

import Spinner from '@/components/ui/Spinner/Spinner'

import styles from './CreateGame.module.scss'

interface CreateGameProps {
	onClose: () => void
}

export const CreateGame: FC<CreateGameProps> = memo(({ onClose }) => {
	const [createGame, { data: result }] = useCreateGame()
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateGameSchema>({
		mode: 'onBlur',
	})

	console.log('isLoading', isLoading)

	const [currentFile, setCurrentFile] = useState<File | null>(null)
	const [currentImages, setCurrentImages] = useState<File[]>([])
	const [currentVideos, setCurrentVideos] = useState<File[]>([])
	const [curGenreOptions, setCurGenreOptions] = useState<string[]>([])
	const [curFeatureOptions, setCurFeatureOptions] = useState<string[]>([])

	const onSubmit: SubmitHandler<CreateGameSchema> = async data => {
		setIsLoading(true)
		const formData = createGameFormData(
			data,
			currentFile,
			curGenreOptions,
			curFeatureOptions,
		)

		// @ts-ignore
		const gameId = await createGame(formData).then(data => data.data.id)

		await CreateGameService.addInfo(createGameInfoFormData(gameId, data))
		await CreateGameService.addAboutInfo(
			createGameAboutInfoFormData(gameId, data),
		)

		const formVideosData = createFormVideosData(currentVideos)
		await CreateGameService.addMedia(formVideosData, gameId, 'video', 'videos')
		const formImagesData = createFormImagesData(currentImages)
		await CreateGameService.addMedia(formImagesData, gameId, 'image', 'images')
		setIsLoading(false)
		onClose()
	}

	if (isLoading) return <Spinner />

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Create Game</h2>
			<div className={styles.forms}>
				<MainGameInfoForm
					register={register}
					errors={errors}
					setCurrentFile={setCurrentFile}
				/>
				<GameMediaForm
					setCurrentImages={setCurrentImages}
					setCurrentVideos={setCurrentVideos}
				/>
				<div className={styles.aboutInfoForm}>
					<p>Game&apos;s Characteristics</p>
					<GameRequirementsForm register={register} errors={errors} />
					<GameAboutForm register={register} />
				</div>
				<div className={styles.selectorsForm}>
					<p>Game&apos;s Genres & Features</p>
					<GenresSelector
						currentOptions={curGenreOptions}
						setCurrentOptions={setCurGenreOptions}
					/>
					<FeaturesSelector
						currentOptions={curFeatureOptions}
						setCurrentOptions={setCurFeatureOptions}
					/>
				</div>
			</div>
			<div className={styles.submit}>
				<button type={'submit'}>Create</button>
			</div>
		</form>
	)
})
