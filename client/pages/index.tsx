import type { NextPage } from 'next'
import Layout from '../app/components/layout/Layout.'
import Store from '../app/components/pages/store/Store'

const HomePage: NextPage = () => {
	return (
		<Layout showHeader={true} title={'D&D Games | Store page'}>
			<Store />
		</Layout>
	)
}

export default HomePage
