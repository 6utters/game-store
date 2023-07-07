import { AdminPage } from '@/pages/adminPage'
import { NextPageWithRoles } from '@/app/providers/authProvider'

const Admin: NextPageWithRoles = () => <AdminPage />

Admin.isOnlyForAdmin = true

export default Admin
