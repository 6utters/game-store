import { AdminGenresPage } from '@/pages/adminGenresPage'
import { NextPageWithRoles } from '@/app/providers/authProvider'

const Genres: NextPageWithRoles = () => <AdminGenresPage />

Genres.isOnlyForAdmin = true

export default Genres
