import type { NextPage } from 'next'
import Layout from '../app/components/layout/Layout.'
import Signup from '../app/components/pages/auth/Signup'

const SignUpPage: NextPage = () => {
	return (
		<Layout showHeader={false} title={'D&D Games | Sign Up'} showFooter={false}>
			<Signup />
		</Layout>
	)
}

export default SignUpPage
