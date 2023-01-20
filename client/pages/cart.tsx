import Cart from '../src/components/pages/cart/Cart'
import { NextPageWithRoles } from '@/app/providers/authProvider'

const CartPage: NextPageWithRoles = () => <Cart />

CartPage.isOnlyForUser = true

export default CartPage
