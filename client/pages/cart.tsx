import { useEffect } from 'react'
import { fetchCartGames } from '../src/store/reducers/cartReducer/cartAC'
import { useAppDispatch } from '../src/hooks/redux'
import Cart from '../src/components/pages/cart/Cart'
import Layout from '../src/components/layout/Layout.'
import { NextPageWithRoles } from '@/app/providers/authProvider'

const CartPage: NextPageWithRoles = () => {
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

CartPage.isOnlyForUser = true

export default CartPage
