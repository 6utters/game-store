import { FC, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	signIn,
	SignInFields,
	signUp,
	SignUpFields,
} from '../../model/services'
import {
	getAuthByEmailError,
	getAuthByEmailIsLoading,
} from '../../model/selectors'

import { emailPattern, LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/consts'
import { Input, Logo } from '@/shared/ui'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib'

import { authByEmailReducer } from '@/features/authByEmail'
import styles from './AuthForm.module.scss'

const initialReducers: ReducerList = {
	authByEmail: authByEmailReducer,
}

interface AuthFormProps {
	isSignUpPage: boolean
}

export const AuthForm: FC<AuthFormProps> = memo(({ isSignUpPage }) => {
	const dispatch = useAppDispatch()
	const router = useRouter()

	const error = useSelector(getAuthByEmailError)
	const isLoading = useSelector(getAuthByEmailIsLoading)

	const redirect = async (status: string) => {
		if (status === 'fulfilled') await router.push('/')
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFields>()

	const onSignUpSubmit: SubmitHandler<SignUpFields> = useCallback(
		async data => {
			const result = await dispatch(signUp(data))
			await redirect(result.meta.requestStatus)
		},
		[dispatch, redirect],
	)

	const onSignInSubmit: SubmitHandler<SignInFields> = useCallback(
		async data => {
			const result = await dispatch(signIn(data))
			await redirect(result.meta.requestStatus)
		},
		[dispatch, redirect],
	)

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<form
				onSubmit={handleSubmit(isSignUpPage ? onSignUpSubmit : onSignInSubmit)}
				className={styles.form}
			>
				<Logo size={40} className={styles.image} />
				<div className={styles.title}>
					<h1>{isSignUpPage ? 'Sign Up.' : 'Sign In'}</h1>
				</div>
				<div className={styles.inputs}>
					{isSignUpPage && (
						<Input
							placeholder={"User's Name"}
							{...register('userName', {
								required: 'Required',
							})}
							error={errors.userName}
						/>
					)}
					<Input
						placeholder={'Email Address'}
						{...register('email', {
							required: 'Required',
							pattern: { value: emailPattern, message: 'Invalid email' },
						})}
						error={errors.email}
					/>
					<Input
						placeholder={'Password'}
						{...register('password', {
							required: 'Required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 symbols.',
							},
						})}
						error={errors.password}
						type={'password'}
					/>
					{error && <div className={styles.error}>{error}</div>}
					<div className={styles.submit}>
						<button type={'submit'} disabled={isLoading}>
							{isSignUpPage ? 'SIGN UP NOW' : 'SIGN IN NOW'}
						</button>
					</div>
					{isSignUpPage && (
						<div className={styles.privacy}>
							<h3>Privacy Policy</h3>
						</div>
					)}
					<div className={styles.condition}>
						{isSignUpPage && (
							<p>
								Have a D&D Games account? <Link href={LOGIN_ROUTE}>Log In</Link>
							</p>
						)}
						{!isSignUpPage && (
							<p>
								Don&apos;t have an D&D Games Account?{' '}
								<Link href={REGISTRATION_ROUTE}>Sign Up</Link>
							</p>
						)}
					</div>
				</div>
			</form>
		</DynamicModuleLoader>
	)
})
