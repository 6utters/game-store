import type { NextPage } from 'next'
import Layout from '../src/components/layout/Layout.'
import Signup from '../src/components/pages/auth/Signup'

const SignUpPage: NextPage = () => {
	return (
		<Layout showHeader={false} title={'D&D Games | Sign Up'} showFooter={false}>
			<Signup />
		</Layout>
	)
}

export default SignUpPage
