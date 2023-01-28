import { NextPageWithRoles } from '@/app/providers/authProvider'
import { CartPage } from '@/pages/cartPage'

const Cart: NextPageWithRoles = () => <CartPage />

Cart.isOnlyForUser = true

export default Cart
