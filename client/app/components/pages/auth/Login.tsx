import { FC } from 'react'
import styles from './Auth.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginField } from '../../../models/ILoginField'
import { useAppDispatch } from '../../../hooks/redux'
import { login } from '../../../store/reducers/userReducer/userAC'
import logoSvg from '../../../assets/svgs/sword-svgrepo-com.svg'
import Image from 'next/image'
import Input from '../../ui/Input/Input'
import Link from 'next/link'
import { REGISTRATION_ROUTE, STORE_ROUTE } from '../../../utils/constants'
import { useRouter } from 'next/router'

const Login: FC = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginField>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<ILoginField> = (data) => {
		dispatch(login(data.email, data.password))
		return router.push('/')
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.form}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Link href={STORE_ROUTE}>
							<a>
								<div className={styles.image}>
									<Image src={logoSvg} height={40} width={40} />
									<h2>
										<span>D</span>&<span>D</span> Games
									</h2>
								</div>
							</a>
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
							<div className={styles.submit}>
								<button type={'submit'}>LOG IN NOW</button>
							</div>
							<div className={styles.privacy}>
								<h3>Privacy Policy</h3>
							</div>
							<div className={styles.condition}>
								<p>
									Don't have an D&D Games Account?{' '}
									<Link href={REGISTRATION_ROUTE}>
										<a>Sign Up</a>
									</Link>
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
