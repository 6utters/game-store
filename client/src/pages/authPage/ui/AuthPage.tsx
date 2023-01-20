import { FC } from 'react'
import { useRouter } from 'next/router'
import { REGISTRATION_ROUTE } from '@/shared/consts'
import { Layout } from '@/shared/ui'

import { AuthForm } from '@/features/authByEmail'

import styles from './AuthPage.module.scss'

const AuthPage: FC = () => {
	const router = useRouter()
	const isSignUpPage = router.pathname === REGISTRATION_ROUTE
	return (
		<Layout title={`D&D Games | ${isSignUpPage ? 'Sign Up' : 'Sign In'}`}>
			<div className={styles.container}>
				<div className={styles.card}>
					<AuthForm isSignUpPage={isSignUpPage} />
				</div>
			</div>
		</Layout>
	)
}

export default AuthPage
