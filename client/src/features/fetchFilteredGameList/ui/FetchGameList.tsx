import { FC, memo } from 'react'
import cn from 'classnames'

import { useFetchGameList } from '../api/fetchFilteredGamesApi'
import { GameCardList, GameSchema } from '@/entities/Game'

import styles from './FetchGameList.module.scss'
import { useSelector } from 'react-redux'
import { getSelectedGenres } from '@/features/genresPanel'
import { getSelectedFeatures } from '@/features/featuresPanel'

interface FetchGameListProps {
	games?: GameSchema[]
	className?: string
}

export const FetchGameList: FC<FetchGameListProps> = memo(props => {
	const { games, className } = props
	const genres = useSelector(getSelectedGenres)
	const features = useSelector(getSelectedFeatures)

	const {
		data: filteredGames,
		error,
		isLoading,
	} = useFetchGameList(
		{
			genres,
			features,
		},
		{ skip: !genres.length && !features.length },
	)

	if (error) {
		return (
			<div className={styles.fetchGameList}>
				<h3>Something went wrong.</h3>
			</div>
		)
	}

	return (
		<div className={cn(styles.games_container, className)}>
			<GameCardList
				games={filteredGames ? filteredGames : games}
				isLoading={isLoading}
			/>
		</div>
	)
})
