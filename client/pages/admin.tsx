import { FC } from 'react'
import Admin from '../src/components/pages/admin/Admin'
import Layout from '../src/components/layout/Layout.'
import AdminLayout from '../src/components/layout/adminLayout/AdminLayout'

const AdminPage: FC = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | Admin panel'}
			showFooter={false}
		>
			<AdminLayout>
				<Admin />
			</AdminLayout>
		</Layout>
	)
}

export default AdminPage
