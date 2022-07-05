import { FC } from 'react'
import Layout from '../../app/components/layout/Layout.'
import AdminLayout from '../../app/components/layout/adminLayout/AdminLayout'
import GenresPanel from '../../app/components/pages/admin/genresPanel/GenresPanel'

const Genres: FC = () => {
	return (
		<Layout showHeader={true} title={'D&D Games | Admin panel | Genres Panel'}>
			<AdminLayout>
				<GenresPanel />
			</AdminLayout>
		</Layout>
	)
}

export default Genres
