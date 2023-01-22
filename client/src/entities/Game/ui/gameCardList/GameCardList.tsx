import { FC } from 'react'
import cn from 'classnames'

import { GameCardSkeleton } from '../gameCard/GameCardSkeleton'
import { GameCard } from '../gameCard/GameCard'
import { GameSchema } from '../../model/types/GameSchema'

import styles from './GameCardList.module.scss'

interface GameCardListProps {
	games?: GameSchema[]
	isLoading?: boolean
	className?: string
}

const getSkeletons = () =>
	new Array(9)
		.fill(0)
		.map((_, index) => <GameCardSkeleton key={index} className={styles.card} />)

export const GameCardList: FC<GameCardListProps> = props => {
	const { isLoading, className, games } = props

	const renderGameCard = (game: GameSchema) => (
		<GameCard
			key={game.gameName}
			name={game.gameName}
			price={game.gamePrice}
			image={game.gameImage}
			gameId={game.id}
		/>
	)

	if (!isLoading && !games?.length) {
		return (
			<div className={styles.gameCardList}>
				<h2>No games were found.</h2>
			</div>
		)
	}

	return (
		<div className={cn(styles.gameCardList, className)}>
			{games && !!games.length && games.map(renderGameCard)}
			{isLoading && getSkeletons()}
		</div>
	)
}
