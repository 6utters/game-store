import type { NextPage } from 'next'
import { AuthPage } from '@/pages/authPage'

const LogIn: NextPage = () => {
	return <AuthPage dataTestId={'LoginPage'} />
}

export default LogIn
