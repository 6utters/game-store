import { FC } from 'react'
import AdminLayout from '../../src/components/layout/adminLayout/AdminLayout'
import Layout from '../../src/components/layout/Layout.'
import FeaturesPanel from '../../src/components/pages/admin/featuresPanel/FeaturesPanel'

const Features: FC = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | Admin panel | Features Panel'}
			showFooter={false}
		>
			<AdminLayout>
				<FeaturesPanel />
			</AdminLayout>
		</Layout>
	)
}

export default Features
