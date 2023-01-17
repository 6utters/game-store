import { FC } from 'react'
import Layout from '../../src/components/layout/Layout.'
import AdminLayout from '../../src/components/layout/adminLayout/AdminLayout'
import GenresPanel from '../../src/components/pages/admin/genresPanel/GenresPanel'

const Genres: FC = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | Admin panel | Genres Panel'}
			showFooter={false}
		>
			<AdminLayout>
				<GenresPanel />
			</AdminLayout>
		</Layout>
	)
}

export default Genres
