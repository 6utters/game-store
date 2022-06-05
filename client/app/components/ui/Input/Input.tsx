import { FC, forwardRef } from 'react'
import { IInput } from './Input.interface'
import styles from './Input.module.scss'

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref} type={type} {...rest} id={'input'} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)
Input.displayName = 'Field'
export default Input
