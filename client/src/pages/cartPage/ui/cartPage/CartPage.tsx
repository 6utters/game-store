import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useFetchGamesByIds } from '@/features/fetchFilteredGameList'

import { DynamicModuleLoader, ReducerList } from '@/shared/lib'
import { CartSummary } from '@/pages/cartPage/ui/cartSummary/CartSummary'

import { getCartGamesIds } from '@/entities/Cart/model/selectors/getCartGamesIds/getCartGamesIds'
import { CartCardList } from '@/entities/Cart'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { Toolbar } from '@/widgets/toolbar'
import { CartIsEmpty } from '../cartIsEmpty/CartIsEmpty'

import { userCartSliceReducer } from '@/features/userCart'
import styles from './CartPage.module.scss'

const initialReducers: ReducerList = {
	userCart: userCartSliceReducer,
}

const CartPage: FC = () => {
	const gameIds = useSelector(getCartGamesIds)
	const { data: data, isLoading } = useFetchGamesByIds(gameIds, {
		skip: !gameIds.length,
	})
	const cartGames = data?.filter(Boolean)

	const totalPrice = useMemo(
		() =>
			cartGames?.reduce((acc, game) => {
				return acc + game.gamePrice
			}, 0),
		[cartGames],
	)

	const discount = 0

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<MainLayout title={'D&D Games | Your Cart'}>
				<Toolbar />
				<section className={styles.page_wrapper}>
					<div className={styles.title}>
						<h1>My Cart</h1>
					</div>
					{cartGames?.length ? (
						<div className={styles.content}>
							<CartCardList games={cartGames} isLoading={isLoading} />
							<CartSummary
								totalPrice={totalPrice}
								discount={discount}
								isLoading={isLoading}
							/>
						</div>
					) : (
						<CartIsEmpty />
					)}
				</section>
			</MainLayout>
		</DynamicModuleLoader>
	)
}

export default CartPage
