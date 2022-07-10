import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import PopUp from '../../../../ui/popUp/PopUp'
import Input from '../../../../ui/Input/Input'
import styles from './GamesModal.module.scss'
import { IGameForm } from '../../../../../models/IGameForm'
import MultipleSelect, {
	IOption,
} from '../../../../ui/MultipleSelect/MultipleSelect'
import GameService from '../../../../../services/game.service'
import {
	setFeatures,
	setGames,
	setGenres,
} from '../../../../../store/reducers/gameReducer/GameSlice'
import FormData from 'form-data'
import UploadField from '../../../../ui/UploadField/UploadField'
import { IGameInfo } from '../../../../../models/IGameInfo'
import { IGameAboutInfo } from '../../../../../models/IGameAboutInfo'
import Spinner from '../../../../ui/Spinner/Spinner'
import { IGameModalProps } from '../../../../../models/IGameModalProps'
import ModalInfoField from './MofalInfoField/ModalInfoField'
import ModalAboutField from './ModalAboutField/ModalAboutField'

const GameModal: FC<IGameModalProps> = ({ active, setActive }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGameForm>({
		mode: 'onBlur',
	})
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	useEffect(() => {
		GameService.fetchGenres().then((data) => dispatch(setGenres(data)))
		GameService.fetchFeatures().then((data) => dispatch(setFeatures(data)))
	}, [])
	const { genres, features } = useAppSelector((state) => state.game)
	const genreOptions: IOption[] = genres.map((g) => ({
		value: g.genreName,
		label: g.genreName,
	}))
	const featuresOptions: IOption[] = features.map((f) => ({
		value: f.featureName,
		label: f.featureName,
	}))
	const [currentFile, setCurrentFile] = useState(null)
	const [currentImages, setCurrentImages] = useState<File[]>([])
	const [currentVideos, setCurrentVideos] = useState<File[]>([])
	const [currentGenreOptions, setCurrentGenreOptions] = useState([])
	const [currentFeatureOptions, setCurrentFeatureOptions] = useState([])

	const onSubmit: SubmitHandler<IGameForm> = async (data) => {
		setLoading(true)
		const formData = new FormData()
		formData.append('gameName', data.gameName)
		formData.append('gamePrice', `${data.gamePrice}`)
		formData.append('gameImage', currentFile)
		formData.append('genreNames', JSON.stringify(currentGenreOptions))
		formData.append('featureNames', JSON.stringify(currentFeatureOptions))
		const gameId = await GameService.createGame(formData).then(
			(data) => data.id,
		)
		const gameInfo: IGameInfo = {
			gameId,
			developer: data.developer,
			publisher: data.publisher,
			releaseDate: data.releaseDate,
			os: data.os,
			processor: data.processor,
			memory: data.memory,
			storage: data.storage,
			graphics: data.graphics,
		}
		await GameService.addInfo(gameInfo)
		const gameAboutInfo: IGameAboutInfo = {
			gameId,
			mainInfo: data.mainInfo,
			fstP: data.fstP,
			sndP: data.sndP,
			thdP: data.thdP,
			ftsP: data.ftsP,
			thsP: data.thsP,
		}
		await GameService.addAboutInfo(gameAboutInfo)
		const formVideosData = new FormData()
		for (let i = 0; i < currentVideos.length; i++) {
			formVideosData.append('media', currentVideos[i])
		}
		await GameService.addMedia(formVideosData, gameId, 'video', 'videos')
		const formImagesData = new FormData()
		for (let i = 0; i < currentImages.length; i++) {
			formImagesData.append('media', currentImages[i])
		}
		await GameService.addMedia(formImagesData, gameId, 'image', 'images')
		GameService.fetchGames().then((data) => dispatch(setGames(data)))
		setActive(false)
		setLoading(false)
	}

	const selectFile = (e: any) => {
		setCurrentFile(e.target.files[0])
	}

	const selectVideos = (e: any) => {
		const videos: File[] = []
		for (let i = 0; i < Object.keys(e.target.files).length; i++)
			videos.push(e.target.files[i])
		setCurrentVideos(videos)
	}

	const selectImages = (e: any) => {
		const images: File[] = []
		for (let i = 0; i < Object.keys(e.target.files).length; i++)
			images.push(e.target.files[i])
		setCurrentImages(images)
	}

	return (
		<>
			<PopUp modalActive={active} setModalActive={setActive}>
				<div className={styles.content} onClick={(e) => e.stopPropagation()}>
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
												onChange={selectFile}
											/>
										</div>
									</div>
									<div className={styles.form_2}>
										<div className={styles.file_input}>
											<UploadField
												title={'Choose 2 videos for the Game'}
												multiple={true}
												onChange={selectVideos}
											/>
										</div>
										<div className={styles.file_input}>
											<UploadField
												title={'Choose 6 images for the Game'}
												multiple={true}
												onChange={selectImages}
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
