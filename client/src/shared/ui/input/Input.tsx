import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import cn from 'classnames'

import styles from './Input.module.scss'

export interface FieldProps {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

type TypedInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps

export interface Input extends TypedInputPropsField {}

const Input: FC<Input> = forwardRef<HTMLInputElement, Input>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.input, {
					[styles.errorInput]: error,
				})}
				style={style}
			>
				<input ref={ref} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

Input.displayName = 'Field'
export default Input
