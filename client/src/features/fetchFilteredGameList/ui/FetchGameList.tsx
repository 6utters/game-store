import { FC } from 'react'
import cn from 'classnames'

import { useFetchGameList } from '../model/api/fetchFilteredGamesApi'
import { GameCardList, GameSchema } from '@/entities/Game'

import styles from './FetchGameList.module.scss'
import { useSelector } from 'react-redux'
import { getSelectedGenres } from '@/features/fetchFilteredGameList/model/selectors/getSelectedGenres/getSelectedGenres'
import { getSelectedFeatures } from '@/features/fetchFilteredGameList/model/selectors/getSelectedFeatures/getSelectedFeatures'

interface FetchGameListProps {
	games?: GameSchema[]
	className?: string
}

export const FetchGameList: FC<FetchGameListProps> = props => {
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
		<div className={cn(styles.games, className)}>
			<GameCardList
				games={filteredGames ? filteredGames : games}
				isLoading={isLoading}
			/>
		</div>
	)
}
