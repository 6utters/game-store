import { FC, memo, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'
import { GameSchema } from '@/entities/Game'
import { useAppDispatch } from '@/shared/lib/hooks'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib'
import { genresPanelActions, genresPanelReducer } from '@/features/genresPanel'
import {
	featuresPanelActions,
	featuresPanelReducer,
} from '@/features/featuresPanel'

import styles from './GameDetailsInfo.module.scss'

interface GameDetailsInfoProps {
	game: GameSchema
}

const initialReducers: ReducerList = {
	featuresPanel: featuresPanelReducer,
	genresPanel: genresPanelReducer,
}

export const GameDetailsInfo: FC<GameDetailsInfoProps> = memo(props => {
	const {
		game: { gameName, genres, features, gameAbout },
	} = props
	const dispatch = useAppDispatch()

	const aboutInfoParagraphs = useMemo(() => {
		const { gameId, mainInfo, id, createdAt, updatedAt, ...paragraphs } =
			gameAbout
		return Object.values(paragraphs).map((paragraph, index) => {
			return <p key={paragraph + index}>{paragraph}</p>
		})
	}, [gameAbout])

	const router = useRouter()
	const onGenreClick = useCallback(
		(genre: Genre) => {
			dispatch(genresPanelActions.selectGenre(genre))
			router.push('/')
		},
		[dispatch, router],
	)

	const onFeatureClick = useCallback(
		(feature: Feature) => {
			dispatch(featuresPanelActions.selectFeature(feature))
			router.push('/')
		},
		[dispatch, router],
	)

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
			<div className={styles.container}>
				<div className={styles.main_info}>
					<p>{gameAbout.mainInfo}</p>
				</div>
				<div className={styles.genres_filters}>
					<div className={styles.genre_card}>
						<p>Genres</p>
						<div className={styles.genres}>
							{genres.map(genre => (
								<h5 onClick={() => onGenreClick(genre)} key={genre.id}>
									{genre.genreName}
								</h5>
							))}
						</div>
					</div>
					<div className={styles.feature_card}>
						<p>Features</p>
						<div className={styles.features}>
							{features.map(feature => (
								<h5 onClick={() => onFeatureClick(feature)} key={feature.id}>
									{feature.featureName}
								</h5>
							))}
						</div>
					</div>
				</div>
				<div className={styles.about}>
					<div className={styles.game_name}>
						<p>{gameName}</p>
					</div>
					<div className={styles.game_about}>
						<p>About</p>
					</div>
					{aboutInfoParagraphs}
				</div>
			</div>
		</DynamicModuleLoader>
	)
})
