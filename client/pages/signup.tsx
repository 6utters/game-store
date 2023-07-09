import type { NextPage } from 'next'
import { AuthPage } from '@/pages/authPage'

const SignUp: NextPage = () => {
	return <AuthPage dataTestId={'SignupPage'} />
}

export default SignUp
