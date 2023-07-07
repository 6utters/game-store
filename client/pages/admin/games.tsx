import { NextPageWithRoles } from '@/app/providers/authProvider'
import { AdminGamesPage } from '@/pages/adminGamesPage'

const Games: NextPageWithRoles = () => <AdminGamesPage />

Games.isOnlyForAdmin = true

export default Games
