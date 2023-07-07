import { FC, memo, useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GameInfoFields } from '../gameInfoFields/GameInfoFields'
import { GameMediaFields } from '../gameMediaFields/GameMediaFields'
import { GameReqsFields } from '../gameReqsFields/GameReqsFields'
import { GameAboutFields } from '../gameAboutFields/GameAboutFields'
import { FeatureSelector, useFetchFeatures } from '@/entities/Feature'
import { GenreSelector, useFetchGenres } from '@/entities/Genre'
import { useAppDispatch } from '@/shared/lib/hooks'
import { createGame } from '../../model/services/createGame'
import { GameArgs } from '../../model/types/CreateGame'
import { useSelector } from 'react-redux'
import { getCreateGameIsLoading } from '../../model/selectors/getCreateGameIsLoading/getCreateGameIsLoading'
import { getCreateGameError } from '../../model/selectors/getCreateGameError/getCreateGameError'
import styles from './CreateGameForm.module.scss'

export interface CreateGameArgs {
	currentFile: File | null
	currentImages: File[]
	currentVideos: File[]
	curGenreOptions: string[]
	curFeatureOptions: string[]
}

interface CreateGameFormProps {
	onClose: () => void
}

export const CreateGameForm: FC<CreateGameFormProps> = memo(props => {
	const { onClose } = props
	const dispatch = useAppDispatch()
	const isLoading = useSelector(getCreateGameIsLoading)
	const error = useSelector(getCreateGameError)

	const { data: features } = useFetchFeatures()
	const { data: genres } = useFetchGenres()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GameArgs>({
		mode: 'onBlur',
	})

	const [gameArgs, setGameArgs] = useState<CreateGameArgs>({
		currentFile: null,
		curFeatureOptions: [],
		curGenreOptions: [],
		currentImages: [],
		currentVideos: [],
	})

	const onSubmit: SubmitHandler<GameArgs> = async data => {
		const result = await dispatch(
			createGame({
				gameData: data,
				gameImage: gameArgs.currentFile,
				images: gameArgs.currentImages,
				videos: gameArgs.currentVideos,
				genres: gameArgs.curGenreOptions,
				features: gameArgs.curFeatureOptions,
			}),
		)
		if (result.meta.requestStatus === 'fulfilled') {
			onClose()
		}
	}

	const setGenres = useCallback((genreOptions: string[]) => {
		setGameArgs(prev => ({ ...prev, curGenreOptions: genreOptions }))
	}, [])

	const setFeatures = useCallback((featureOptions: string[]) => {
		setGameArgs(prev => ({ ...prev, curFeatureOptions: featureOptions }))
	}, [])

	if (isLoading) {
		return (
			<form className={styles.form}>
				<h1 className={styles.loading}>
					Please wait, your game is being created...
				</h1>
			</form>
		)
	}

	if (error) {
		return (
			<form className={styles.form}>
				<h1 className={styles.loading}>Something went wrong...</h1>
			</form>
		)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Create Game</h2>
			<div className={styles.forms}>
				<GameInfoFields
					register={register}
					errors={errors}
					setGameArgs={setGameArgs}
				/>
				<div className={styles.selectors}>
					<p>Game&apos;s Genres & Features</p>
					<GenreSelector
						genres={genres}
						currentOptions={gameArgs.curGenreOptions}
						setCurrentOptions={setGenres}
					/>
					<FeatureSelector
						features={features}
						currentOptions={gameArgs.curFeatureOptions}
						setCurrentOptions={setFeatures}
					/>
				</div>
				<GameMediaFields setGameArgs={setGameArgs} />
				<div className={styles.about_info}>
					<p>Game&apos;s Characteristics</p>
					<GameReqsFields register={register} errors={errors} />
					<GameAboutFields register={register} />
				</div>
			</div>
			<div className={styles.submit}>
				<button type={'submit'}>Create</button>
			</div>
		</form>
	)
})
