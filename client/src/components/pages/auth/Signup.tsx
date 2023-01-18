import { FC, useEffect } from 'react'
import styles from './Auth.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions, useAppSelector } from '../../../hooks/redux'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import Image from 'next/image'
import Input from '../../ui/Input/Input'
import Link from 'next/link'
import { ISignupFields } from '../../../models/ISignupFields'
import { useRouter } from 'next/router'
import { LOGIN_ROUTE, STORE_ROUTE } from '@/shared/consts'

const Signup: FC = () => {
	const router = useRouter()
	const { register: registerHandler } = useActions()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignupFields>()

	const { error, isAuth } = useAppSelector(state => state.auth)

	useEffect(() => {
		if (isAuth) {
			router.push('/').then()
		}
	}, [isAuth])

	const onSubmit: SubmitHandler<ISignupFields> = async data => {
		registerHandler(data)
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
							<h1>Sign Up.</h1>
						</div>
						<div className={styles.form_elms}>
							<Input
								placeholder={"User's Name"}
								{...register('userName', { required: 'Required' })}
								error={errors.userName}
							/>
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
								<button type={'submit'}>SIGN UP NOW</button>
							</div>
							<div className={styles.privacy}>
								<h3>Privacy Policy</h3>
							</div>
							<div className={styles.condition}>
								<p>
									Have an D&D Games account?{' '}
									<Link href={LOGIN_ROUTE}>Log In</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
