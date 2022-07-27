import { FC, forwardRef } from 'react'
import { IInput } from './Input.interface'
import styles from './Input.module.scss'
import cn from 'classnames'

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
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
