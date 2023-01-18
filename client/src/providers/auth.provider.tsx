import React, { FC, PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { refresh } from '@/features/authByEmail'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'

const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
	const dispatch = useAppDispatch()
	// const { check } = useActions()
	useEffect(() => {
		if (localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)) {
			// check()
			dispatch(refresh())
		}
	}, [])
	return <>{children}</>
}

export default AuthProvider
