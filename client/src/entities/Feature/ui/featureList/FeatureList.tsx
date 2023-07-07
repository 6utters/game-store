import { FC, memo } from 'react'
import { ImCross } from 'react-icons/im'
import { Feature } from '@/entities/Feature'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { Skeleton } from '@/shared/ui'
import cn from 'classnames'

import styles from './FeatureList.module.scss'

interface FeatureListProps {
	className?: string
	features?: Feature[]
	isLoading: boolean
	error?: FetchBaseQueryError | SerializedError
	onDelete: (featureId: number) => void
}

export const FeatureList: FC<FeatureListProps> = memo(props => {
	const { className, features, isLoading, error, onDelete } = props

	if (isLoading) {
		return (
			<div className={cn(styles.feature_list, className)}>
				<Skeleton width={'5rem'} height={'1rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
			</div>
		)
	}

	if (!features || error)
		return <div className={styles.error}>Something went wrong</div>

	return (
		<div className={cn(styles.feature_list, className)}>
			<h3 className={styles.heading}>Feature</h3>
			{features.map(feature => (
				<div key={feature.id} className={styles.feature_item}>
					<p>{feature.featureName}</p>
					<ImCross onClick={() => onDelete(feature.id)} />
				</div>
			))}
		</div>
	)
})
