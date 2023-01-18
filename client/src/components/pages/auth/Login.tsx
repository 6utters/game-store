import { FC, useEffect } from 'react'
import styles from './Auth.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginFields } from '../../../models/ILoginFields'
import { useActions, useAppSelector } from '../../../hooks/redux'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import Image from 'next/image'
import Input from '../../ui/Input/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { REGISTRATION_ROUTE, STORE_ROUTE } from '@/shared/consts'

const Login: FC = () => {
	const router = useRouter()
	// const dispatch = useAppDispatch()
	const { login } = useActions()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFields>({
		mode: 'onBlur',
	})

	// const { error } = useAppSelector((state) => state.user)
	const { error, isAuth } = useAppSelector(state => state.auth)

	useEffect(() => {
		if (isAuth) {
			router.push('/').then()
		}
	}, [isAuth])

	const onSubmit: SubmitHandler<ILoginFields> = async data => {
		// try {
		// 	await AuthService.login(data.email, data.password)
		// 	dispatch(login(data.email, data.password))
		// 	return router.push('/')
		// } catch (e: any) {
		// 	dispatch(userSlice.actions.setUserError(e.response.data.message))
		// }
		login(data)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.form}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Link href={STORE_ROUTE}>
							<div className={styles.image}>
								<Image alt={'img'} src={logoSvg} height={40} width={40} />
								<h2>
									<span>D</span>&<span>D</span> Games
								</h2>
							</div>
						</Link>
						<div className={styles.title}>
							<h1>Log in with an D&D Games Account.</h1>
						</div>
						<div className={styles.form_elms}>
							<Input
								placeholder={'Email Address'}
								{...register('email', { required: 'Required' })}
								error={errors.email}
							/>
							<Input
								placeholder={'Password'}
								{...register('password', { required: 'Required' })}
								error={errors.password}
								type={'password'}
							/>
							{error && <div className={styles.error}>{error}</div>}
							<div className={styles.submit}>
								<button type={'submit'}>LOG IN NOW</button>
							</div>
							<div className={styles.privacy}>
								<h3>Privacy Policy</h3>
							</div>
							<div className={styles.condition}>
								<p>
									Don't have an D&D Games Account?{' '}
									<Link href={REGISTRATION_ROUTE}>Sign Up</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
