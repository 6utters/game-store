import { FC, memo, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'
import { GameSchema } from '@/entities/Game'

import {
	fetchFilteredGameListActions,
	fetchFilteredGameListReducer,
} from '@/features/fetchFilteredGameList'
import { useAppDispatch } from '@/shared/lib/hooks'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib'

import styles from './GameDetailsInfo.module.scss'

interface GameDetailsInfoProps {
	game: GameSchema
}

const initialReducers: ReducerList = {
	fetchFilteredGameList: fetchFilteredGameListReducer,
}

export const GameDetailsInfo: FC<GameDetailsInfoProps> = memo(props => {
	const {
		game: { gameName, genres, features, gameAbout },
	} = props
	const dispatch = useAppDispatch()

	const aboutInfoParagraphs = useMemo(() => {
		const { gameId, mainInfo, ...paragraphs } = gameAbout
		return Object.values(paragraphs).map((paragraph, index) => {
			return <p key={paragraph + index}>{paragraph}</p>
		})
	}, [gameAbout])

	const router = useRouter()
	const onGenreClick = useCallback(
		(genre: Genre) => {
			dispatch(fetchFilteredGameListActions.selectGenre(genre))
			router.push('/')
		},
		[dispatch],
	)

	const onFeatureClick = useCallback(
		(feature: Feature) => {
			dispatch(fetchFilteredGameListActions.selectFeature(feature))
			router.push('/')
		},
		[dispatch],
	)

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={styles.container}>
				<div className={styles.main_info}>
					<p>{gameAbout.mainInfo}</p>
				</div>
				<div className={styles.genres_filters}>
					<div className={styles.genre_card}>
						<p>Genres</p>
						<div className={styles.genres}>
							{genres.map(g => (
								<h5 onClick={() => onGenreClick(g)} key={g.id}>
									{g.genreName}
								</h5>
							))}
						</div>
					</div>
					<div className={styles.feature_card}>
						<p>Features</p>
						<div className={styles.features}>
							{features.map(f => (
								<h5 onClick={() => onFeatureClick(f)} key={f.id}>
									{f.featureName}
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
