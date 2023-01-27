import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../../hooks/redux'
import PopUp from '../../../../ui/popUp/PopUp'
import Input from '../../../../ui/Input/Input'
import styles from './GamesModal.module.scss'
import { IGameForm } from '../../../../../models/IGameForm'
import MultipleSelect, {
	IOption,
} from '../../../../ui/MultipleSelect/MultipleSelect'
import GameService from '../../../../../services/game.service'
import UploadField from '../../../../ui/UploadField/UploadField'
import Spinner from '../../../../ui/Spinner/Spinner'
import { IGameModalProps } from '../../../../../models/IGameModalProps'
import ModalInfoField from './mofalInfoField/ModalInfoField'
import ModalAboutField from './modalAboutField/ModalAboutField'
import { propertiesApi } from '../../../../../store/api/properties.api'
import {
	createFormImagesData,
	createFormVideosData,
	createGameAboutInfoFormData,
	createGameFormData,
	createGameInfoFormData,
	selectFile,
	selectImages,
	selectVideos,
} from './formdata.helper'
import { fetchFilteredGamesApi } from '@/features/fetchFilteredGameList/model/api/fetchGameList'

const GameModal: FC<IGameModalProps> = ({ active, setActive }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGameForm>({
		mode: 'onBlur',
	})
	const [createGame] = fetchFilteredGamesApi.useCreateGameMutation()
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { data: genres } = propertiesApi.useFetchGenresQuery()
	const { data: features } = propertiesApi.useFetchFeaturesQuery()
	const genreOptions: IOption[] | undefined = genres?.map(g => ({
		value: g.genreName,
		label: g.genreName,
	}))
	const featuresOptions: IOption[] | undefined = features?.map(f => ({
		value: f.featureName,
		label: f.featureName,
	}))
	const [currentFile, setCurrentFile] = useState<File | null>(null)
	const [currentImages, setCurrentImages] = useState<File[]>([])
	const [currentVideos, setCurrentVideos] = useState<File[]>([])
	const [currentGenreOptions, setCurrentGenreOptions] = useState([])
	const [currentFeatureOptions, setCurrentFeatureOptions] = useState([])

	const onSubmit: SubmitHandler<IGameForm> = async data => {
		setLoading(true)

		const formData = createGameFormData(
			data,
			currentFile,
			currentGenreOptions,
			currentFeatureOptions,
		)
		//TODO: resolve error case
		// @ts-ignore
		const gameId = await createGame(formData).then(data => data.data.id)

		await GameService.addInfo(createGameInfoFormData(gameId, data))
		await GameService.addAboutInfo(createGameAboutInfoFormData(gameId, data))

		const formVideosData = createFormVideosData(currentVideos)
		await GameService.addMedia(formVideosData, gameId, 'video', 'videos')
		const formImagesData = createFormImagesData(currentImages)
		await GameService.addMedia(formImagesData, gameId, 'image', 'images')
		// GameService.fetchGames().then((data) => dispatch(setGames(data)))
		setActive(false)
		setLoading(false)
	}

	return (
		<>
			<PopUp modalActive={active} setModalActive={setActive}>
				<div className={styles.content} onClick={e => e.stopPropagation()}>
					{loading ? (
						<div className={styles.loading}>
							<p>Please wait until the game is created... </p> <Spinner />
						</div>
					) : (
						<>
							<div className={styles.title}>
								<p>Create Game</p>
							</div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className={styles.main_forms}>
									<div className={styles.form_1}>
										<Input
											style={{ marginBottom: '1.5rem', paddingLeft: '0.7rem' }}
											placeholder={'Game Name'}
											{...register('gameName', { required: 'Required' })}
											error={errors.gameName}
										/>
										<Input
											style={{ marginBottom: '1.5rem', paddingLeft: '0.7rem' }}
											placeholder={'Game Price'}
											{...register('gamePrice', {
												pattern: {
													value: /^[0-9]+$/,
													message: 'Please enter a number',
												},
											})}
											error={errors.gamePrice}
										/>
										<div className={styles.file_input}>
											<UploadField
												multiple={false}
												title={'Image for the game'}
												onChange={e => selectFile(e, setCurrentFile)}
											/>
										</div>
									</div>
									<div className={styles.form_2}>
										<div className={styles.file_input}>
											<UploadField
												title={'Choose 2 videos for the Game'}
												multiple={true}
												onChange={e => selectVideos(e, setCurrentVideos)}
											/>
										</div>
										<div className={styles.file_input}>
											<UploadField
												title={'Choose 6 images for the Game'}
												multiple={true}
												onChange={e => selectImages(e, setCurrentImages)}
											/>
										</div>
									</div>
									<div className={styles.form_3}>
										<p>Game's characteristics</p>
										<ModalInfoField register={register} errors={errors} />
										<ModalAboutField register={register} />
									</div>
									<div className={styles.form_4}>
										<p>Genres & Features of the Game</p>
										<div className={styles.genre_input}>
											<MultipleSelect
												currentOptions={currentGenreOptions}
												setCurrentOptions={setCurrentGenreOptions}
												options={genreOptions}
												placeHolder={'Choose genres for the game'}
											/>
										</div>
										<div className={styles.genre_input}>
											<MultipleSelect
												currentOptions={currentFeatureOptions}
												setCurrentOptions={setCurrentFeatureOptions}
												options={featuresOptions}
												placeHolder={'Choose features for the game'}
											/>
										</div>
									</div>
								</div>
								<div className={styles.submit}>
									<button type={'submit'}>Create</button>
								</div>
							</form>
						</>
					)}
				</div>
			</PopUp>
		</>
	)
}

export default GameModal
