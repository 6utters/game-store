import { FC, memo, useCallback } from 'react'

import { ImCross } from 'react-icons/im'

import { useDeleteFeature, useFetchFeatures } from '@/features/featureInteraction'

import styles from './FetchFeatureList.module.scss'

//todo: skeleton on loading

export const FetchFeatureList: FC = memo(() => {
	const { data: features, isLoading, error } = useFetchFeatures()
	const [deleteFeature] = useDeleteFeature()

	const deleteHandler = useCallback((featureId: number) => {
		deleteFeature(featureId)
	}, [])

	if (!features || error) return <div className={styles.error}>Something wet wrong</div>

	return (
		<div className={styles.featureList}>
			<h3>Feature</h3>
			{features.map(feature => (
				<div key={feature.id} className={styles.featureItem}>
					<p>{feature.featureName}</p>
					<ImCross onClick={() => deleteHandler(feature.id)} />
				</div>
			))}
		</div>
	)
})

