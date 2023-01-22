import { FC, useEffect } from 'react'
import { ComponentAuthFields } from '../model/types/PageRoles'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/shared/lib/hooks'
import { logOut, refresh } from '@/features/authByEmail'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import dynamic from 'next/dynamic'

const DynamicCheckRole = dynamic(() => import('../model/lib/CheckRole'), {
	ssr: false,
})

//todo: throw error if refresh crashed

export const AuthProvider: FC<ComponentAuthFields> = ({
	Component: { isOnlyForAdmin, isOnlyForUser },
	children,
}) => {
	const user = useSelector(getUserAuthData)
	const dispatch = useAppDispatch()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)
		if (accessToken) dispatch(refresh())
	}, [])

	useEffect(() => {
		const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)
		if (!accessToken && user) dispatch(logOut())
	}, [pathname])

	return !isOnlyForAdmin && !isOnlyForUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyForAdmin, isOnlyForUser }}>
			{children}
		</DynamicCheckRole>
	)
}
