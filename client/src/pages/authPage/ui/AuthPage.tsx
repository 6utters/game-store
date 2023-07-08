import { FC } from 'react'
import { useRouter } from 'next/router'
import { REGISTRATION_ROUTE } from '@/shared/consts'

import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AuthForm } from '@/features/authByEmail'

import styles from './AuthPage.module.scss'

export const AuthPage: FC = () => {
	const router = useRouter()
	const isSignUpPage = router.pathname === REGISTRATION_ROUTE
	return (
		<MainLayout
			title={`D&D Games | ${isSignUpPage ? 'Sign Up' : 'Sign In'}`}
			withNavbar={false}
			withFooter={false}
			withToolbar={false}
		>
			<div className={styles.container}>
				<div className={styles.card}>
					<AuthForm isSignUpPage={isSignUpPage} />
				</div>
			</div>
		</MainLayout>
	)
}
