import { FC, memo } from 'react'
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
	new Array(15)
		.fill(0)
		.map((_, index) => <GameCardSkeleton key={index} className={styles.card} />)

export const GameCardList: FC<GameCardListProps> = memo(props => {
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

	if ((!isLoading && !games?.length) || !games) {
		return (
			<div className={styles.gameCardList}>
				<h2>No games were found.</h2>
			</div>
		)
	}

	if (isLoading) {
		return (
			<section className={cn(styles.games_section, className)}>
				<ul className={styles.game_list}>{getSkeletons()}</ul>
			</section>
		)
	}

	// Duplicated game cards for quantity
	return (
		<section className={cn(styles.games_section, className)}>
			<ul className={styles.game_list}>
				{games.map(renderGameCard)}
				{games.map(renderGameCard)}
				{games.map(renderGameCard)}
			</ul>
		</section>
	)
})
