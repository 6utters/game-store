import { FC } from 'react'
import Layout from '../../app/components/layout/Layout.'
import AdminLayout from '../../app/components/layout/adminLayout/AdminLayout'
import GamesPanel from '../../app/components/pages/admin/gamesPanel/GamesPanel'

const Games: FC = () => {
	return (
		<Layout showHeader={true} title={'D&D Games | Admin panel | Games Panel'}>
			<AdminLayout>
				<GamesPanel />
			</AdminLayout>
		</Layout>
	)
}

export default Games