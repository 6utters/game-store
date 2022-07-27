import { FC, useEffect } from 'react'
import { fetchCartGames } from '../app/store/reducers/cartReducer/cartAC'
import { useAppDispatch } from '../app/hooks/redux'
import Cart from '../app/components/pages/cart/Cart'
import Layout from '../app/components/layout/Layout.'

const CartPage: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchCartGames())
	}, [])

	return (
		<Layout showHeader={true} title={'D&D Games | Your Cart'} showFooter={true}>
			<Cart />
		</Layout>
	)
}

export default CartPage
