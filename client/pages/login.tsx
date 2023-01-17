import type { NextPage } from 'next'
import Layout from '../src/components/layout/Layout.'
import Login from '../src/components/pages/auth/Login'

const LogInPage: NextPage = () => {
	return (
		<Layout showHeader={false} title={'D&D Games | Log In'} showFooter={false}>
			<Login />
		</Layout>
	)
}

export default LogInPage
