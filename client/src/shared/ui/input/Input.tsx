import { FC, forwardRef, InputHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Input.module.scss'

export interface FieldProps {
	error?: any
}

type TypedInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps

export interface InputProps extends TypedInputPropsField {
	className?: string
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ className, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.input, className, {
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
