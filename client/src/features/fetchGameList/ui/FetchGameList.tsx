import { FC } from 'react'
import cn from 'classnames'

import { useFetchGameList } from '../model/api/fetchGameList'
import { GameCardList } from '@/entities/Game'

import styles from './FetchGameList.module.scss'

interface FetchGameListProps {
	className?: string
}

export const FetchGameList: FC<FetchGameListProps> = ({ className }) => {
	const { data: gameList, isLoading, error } = useFetchGameList({})

	if (error) {
		return (
			<div className={styles.fetchGameList}>
				<h3>Something went wrong.</h3>
			</div>
		)
	}

	return (
		<div className={cn(styles.fetchGameList, className)}>
			<GameCardList games={gameList} isLoading={isLoading} />
		</div>
	)
}
