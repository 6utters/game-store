import React, { FC, PropsWithChildren, useEffect } from 'react'
import { useActions } from '../hooks/redux'

const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
	const { check } = useActions()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			check()
		}
	}, [])
	return <>{children}</>
}

export default AuthProvider
