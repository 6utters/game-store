import { FC } from 'react'
import Admin from '../app/components/pages/admin/Admin'
import Layout from '../app/components/layout/Layout.'
import AdminLayout from '../app/components/layout/adminLayout/AdminLayout'

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
