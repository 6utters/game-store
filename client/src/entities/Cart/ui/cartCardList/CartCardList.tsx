import { FC, memo } from 'react'
import { GameSchema } from '@/entities/Game'
import { CartCard } from '../cartCard/CartCard'
import { Skeleton } from '@/shared/ui'
import cn from 'classnames'

import styles from './CartCardList.module.scss'

interface CartCardListProps {
	className?: string
	games: GameSchema[]
	isLoading: boolean
}

export const CartCardList: FC<CartCardListProps> = memo(props => {
	const { className, games, isLoading } = props

	if (isLoading) {
		return (
			<div className={cn(styles.cart_cards, className)}>
				<Skeleton width={'100%'} height={'13.4rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'13.4rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'13.4rem'} border={'0.25rem'} />
			</div>
		)
	}

	return (
		<div className={cn(styles.cart_cards, className)}>
			{games.map(game => (
				<CartCard key={game.id} game={game} />
			))}
		</div>
	)
})
