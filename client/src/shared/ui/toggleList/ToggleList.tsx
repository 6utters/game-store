import { FC, ReactNode } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import cn from 'classnames'
import styles from './ToggleList.module.scss'

interface ToggleListProps {
	className?: string
	isOpen: boolean
	toggle: () => void
	title: string
	children: ReactNode
}

//todo: outline buttons

export const ToggleList: FC<ToggleListProps> = props => {
	const { className, isOpen, toggle, title, children } = props
	return (
		<div className={cn(styles.toggle_list_wrapper, className)}>
			<button onClick={toggle} className={styles.trigger_btn}>
				<h3>{title}</h3>
				<IoIosArrowDown
					className={cn(styles.arrow_icon, {
						[styles.toggled]: isOpen,
					})}
				/>
			</button>
			{isOpen && <ul className={styles.toggle_list}>{children}</ul>}
		</div>
	)
}
