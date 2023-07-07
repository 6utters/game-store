import { NextPageWithRoles } from '@/app/providers/authProvider'
import { AdminFeaturesPage } from '@/pages/adminFeaturesPage'

const Features: NextPageWithRoles = () => <AdminFeaturesPage />

Features.isOnlyForAdmin = true

export default Features
