import { FC, forwardRef, InputHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Input.module.scss'

export interface FieldProps {
	error?: any
}

type TypedInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps

export interface Input extends TypedInputPropsField {}

const Input: FC<Input> = forwardRef<HTMLInputElement, Input>(
	(
		{ error, type = 'text', style, placeholder = '', value = '', ...rest },
		ref,
	) => {
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
