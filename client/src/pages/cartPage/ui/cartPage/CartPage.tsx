import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { cartInteractionReducer } from '@/features/cartInteraction'
import { useFetchGamesByIds } from '@/features/fetchFilteredGameList'

import { DynamicModuleLoader, ReducerList } from '@/shared/lib'
import { CartSummary } from '@/pages/cartPage/ui/cartSummary/CartSummary'

import { getCartGamesIds } from '@/entities/Cart/model/selectors/getCartGamesIds/getCartGamesIds'
import { CartCardList } from '@/entities/Cart'
import { Layout } from '@/widgets/layout'
import { Toolbar } from '@/widgets/toolbar'
import { CartIsEmpty } from '../cartIsEmpty/CartIsEmpty'

import styles from './CartPage.module.scss'

const initialReducers: ReducerList = {
	cartInteraction: cartInteractionReducer,
}

const CartPage: FC = () => {
	const gameIds = useSelector(getCartGamesIds)
	const { data: data } = useFetchGamesByIds(gameIds, { skip: !gameIds.length })
	const cartGames = data?.filter(Boolean)

	const totalPrice = useMemo(
		() =>
			cartGames?.reduce((acc, game) => {
				return acc + game.gamePrice
			}, 0),
		[cartGames],
	)

	// TODO: realize discount logic
	const discount = 0

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<Layout title={'D&D Games | Your CartSchema'} withNavbar withFooter>
				<Toolbar />
				<div className={styles.container}>
					<div className={styles.title}>
						<h1>My Cart</h1>
					</div>
					{cartGames?.length ? (
						<div className={styles.content}>
							<CartCardList games={cartGames} />
							<CartSummary totalPrice={totalPrice} discount={discount} />
						</div>
					) : (
						<CartIsEmpty />
					)}
				</div>
			</Layout>
		</DynamicModuleLoader>
	)
}

export default CartPage
