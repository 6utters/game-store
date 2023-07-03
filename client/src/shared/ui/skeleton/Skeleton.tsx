import { CSSProperties, FC, memo } from 'react'
import cn from 'classnames'
import styles from './Skeleton.module.scss'

//todo: change styles and colors

interface SkeletonProps {
	className?: string
	height?: string | number
	width?: string | number
	borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = memo(props => {
	const { height, borderRadius, width, className } = props

	const additionalStyles: CSSProperties = {
		height,
		width,
		borderRadius,
	}

	return (
		<div className={cn(styles.skeleton, className)} style={additionalStyles} />
	)
})
