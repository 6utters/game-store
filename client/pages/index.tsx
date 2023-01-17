import type { NextPage } from 'next'
import Layout from '../src/components/layout/Layout.'
import Store from '../src/components/pages/store/Store'

const HomePage: NextPage = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | Store page'}
			showFooter={true}
		>
			<Store />
		</Layout>
	)
}

export default HomePage
