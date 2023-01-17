import { FC } from 'react'
import Layout from '../../src/components/layout/Layout.'
import AdminLayout from '../../src/components/layout/adminLayout/AdminLayout'
import GamesPanel from '../../src/components/pages/admin/gamesPanel/GamesPanel'

const Games: FC = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | Admin panel | Games Panel'}
			showFooter={false}
		>
			<AdminLayout>
				<GamesPanel />
			</AdminLayout>
		</Layout>
	)
}

export default Games
