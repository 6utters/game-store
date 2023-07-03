import { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Dropdown.module.scss'

export interface DropdownLink {
	href: string
	title: string
	adminOnly: boolean
}

interface DropdownProps {
	trigger: ReactNode
	children: ReactNode
	className?: string
	triggerHeight?: number
	optionHeight?: number
	optionNumber: number
}

export const Dropdown: FC<DropdownProps> = props => {
	const {
		children,
		className,
		trigger,
		triggerHeight = 3.25,
		optionHeight = 2.5,
		optionNumber,
	} = props
	return (
		<div className={cn(styles.dropdown, className)}>
			{trigger}
			<ul
				className={styles.popup}
				style={{
					top: `${triggerHeight}rem`,
					height: `${optionHeight * optionNumber}rem`,
				}}
			>
				{children}
			</ul>
		</div>
	)
}
