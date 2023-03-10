import { FC } from 'react'
import { ComponentAuthFields } from '../types/PageRoles'
import { useSelector } from 'react-redux'
import { getIsUserAdmin, getUserAuthData } from '@/entities/User'
import { useRouter } from 'next/router'

const CheckRole: FC<ComponentAuthFields> = ({
	children,
	Component: { isOnlyForAdmin, isOnlyForUser },
}) => {
	const user = useSelector(getUserAuthData)
	const isAdmin = useSelector(getIsUserAdmin)
	const isUser = user && !isAdmin
	const router = useRouter()
	const Children = () => <>{children}</>

	if (isAdmin) return <Children />
	if (isOnlyForAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}
	if (isUser && isOnlyForUser) return <Children />
	else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}
}
export default CheckRole
