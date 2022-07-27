import type { NextPage } from 'next'
import Layout from '../app/components/layout/Layout.'
import Login from '../app/components/pages/auth/Login'

const LogInPage: NextPage = () => {
	return (
		<Layout showHeader={false} title={'D&D Games | Log In'} showFooter={false}>
			<Login />
		</Layout>
	)
}

export default LogInPage
