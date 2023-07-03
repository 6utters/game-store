import { FC, memo } from 'react'
import cn from 'classnames'
import { Skeleton } from '@/shared/ui'

import styles from './GameCard.module.scss'

interface GameCardSkeletonProps {
	className?: string
}

export const GameCardSkeleton: FC<GameCardSkeletonProps> = memo(
	({ className }) => {
		return (
			<div className={cn(styles.card, className)}>
				<Skeleton className={styles.cover} width='100%' height='22rem' />
				<div className={styles.title}>
					<Skeleton className={styles.cover} width={100} height={16} />
				</div>
				<div className={styles.price}>
					<Skeleton className={styles.cover} width={50} height={16} />
				</div>
			</div>
		)
	},
)
