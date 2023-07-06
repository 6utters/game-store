import { FC, memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getCartGamesIds } from '@/entities/Cart'
import { BASKET_ROUTE } from '@/shared/consts'
import { addGameToCart } from '../../model/services/addGameToCart/addGameToCart'
import { useAppDispatch } from '@/shared/lib/hooks'
import { useRouter } from 'next/router'
import { GameSchema } from '@/entities/Game'
import cn from 'classnames'
import styles from './AddToCartButton.module.scss'

interface AddToCartButtonProps {
	className?: string
	game: GameSchema
}

export const AddToCartButton: FC<AddToCartButtonProps> = memo(props => {
	const { className, game } = props
	const dispatch = useAppDispatch()
	const router = useRouter()
	const cartGamesIds = useSelector(getCartGamesIds)

	const isGameInCart = useMemo(
		() => cartGamesIds.includes(game.id),
		[cartGamesIds, game.id],
	)

	const addToCart = useCallback(() => {
		dispatch(addGameToCart(game.gameName))
	}, [dispatch, game.gameName])

	const redirectToCart = () => {
		router.push(BASKET_ROUTE)
	}

	if (isGameInCart) {
		return (
			<button
				className={cn(styles.add_to_cart_button, className)}
				onClick={redirectToCart}
			>
				View in cart
			</button>
		)
	}

	return (
		<button
			className={cn(styles.add_to_cart_button, className)}
			onClick={addToCart}
		>
			Add to cart
		</button>
	)
})
