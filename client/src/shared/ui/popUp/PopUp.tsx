import { FC, PropsWithChildren } from 'react'
import styles from './PopUp.module.scss'
import cn from 'classnames'

const PopUp: FC<
	PropsWithChildren<{
		modalActive: boolean
		setModalActive: (active: boolean) => void
	}>
> = ({ modalActive, setModalActive, children }) => {
	return (
		<div
			className={cn([styles.modal], {
				[styles.active]: modalActive,
			})}
			onClick={() => setModalActive(false)}
		>
			{children}
		</div>
	)
}

export default PopUp
