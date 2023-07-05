import React, { FC, memo } from 'react'
import styles from './Icon.module.scss'
import cn from 'classnames'
import { IconType } from 'react-icons'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
	className?: string
	Icon: IconType
}

interface NonClickableIconProps extends IconBaseProps {
	clickable?: false
}

interface ClickableIconProps extends IconBaseProps {
	clickable: true
	onClick: () => void
}

type IconProps = NonClickableIconProps | ClickableIconProps

export const Icon: FC<IconProps> = memo(props => {
	const {
		Icon,
		className,
		width = 32,
		height = 32,
		clickable,
		...otherProps
	} = props

	const icon = (
		<Icon
			className={cn(styles.icon, {}, [className])}
			height={height}
			width={width}
			{...otherProps}
			onClick={undefined}
		/>
	)

	if (clickable) {
		return (
			<button
				className={styles.icon_button}
				type='button'
				onClick={props.onClick}
				style={{ height, width }}
			>
				{icon}
			</button>
		)
	}

	return icon
})
