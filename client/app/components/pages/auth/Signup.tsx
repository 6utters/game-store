import { FC } from 'react'
import styles from './Auth.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../hooks/redux'
import { signup } from '../../../store/reducers/userReducer/userAC'
import logoSvg from '../../../assets/svgs/sword-svgrepo-com.svg'
import Image from 'next/image'
import Input from '../../ui/Input/Input'
import Link from 'next/link'
import { LOGIN_ROUTE, STORE_ROUTE } from '../../../utils/constants'
import { ISignupFields } from '../../../models/ISignupFields'
import { useRouter } from 'next/router'

const Signup: FC = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignupFields>()

	const onSubmit: SubmitHandler<ISignupFields> = (data) => {
		dispatch(signup(data.email, data.password, data.userName))
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
							<div className={styles.submit}>
								<button type={'submit'}>SIGN UP NOW</button>
							</div>
							<div className={styles.privacy}>
								<h3>Privacy Policy</h3>
							</div>
							<div className={styles.condition}>
								<p>
									Have an D&D Games account?{' '}
									<Link href={LOGIN_ROUTE}>
										<a>Log In</a>
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

export default Signup
