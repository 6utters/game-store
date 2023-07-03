import { FC, memo, useCallback, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import cn from 'classnames'

import { fetchFilteredGameListActions } from '@/features/fetchFilteredGameList'

import { FilterItem, findSelectedFilterId } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'

import styles from './FeatureFilter.module.scss'
import { Feature } from '@/entities/Feature'

interface FeatureFilterProps {
	features?: Feature[]
	selectedFeatures?: Feature[]
}

const FeatureFilter: FC<FeatureFilterProps> = memo(props => {
	const { features, selectedFeatures } = props
	const dispatch = useAppDispatch()
	const [showFeatures, setShowFeatures] = useState(true)

	const featureClickHandler = useCallback(
		(feature: Feature) => {
			if (selectedFeatures?.some(f => f.id === feature.id)) {
				dispatch(fetchFilteredGameListActions.removeSelectedFeature(feature.id))
			} else {
				dispatch(fetchFilteredGameListActions.selectFeature(feature))
			}
		},
		[dispatch, selectedFeatures],
	)

	return (
		<div className={styles.feature_filter}>
			<button
				onClick={() => setShowFeatures(!showFeatures)}
				className={styles.main_btn}
			>
				<h3>features</h3>
				<IoIosArrowDown
					className={cn(styles.arrow_icon, {
						[styles.clicked]: showFeatures,
					})}
				/>
			</button>
			{showFeatures && (
				<ul className={styles.features_list}>
					{features?.map(feature => (
						<li
							onClick={() => featureClickHandler(feature)}
							key={feature.id}
							className={cn(styles.feature, {
								[styles.active_feature]:
								feature.id ===
								findSelectedFilterId(
									feature.id,
									selectedFeatures as FilterItem[],
								),
							})}
						>
							<p>{feature.featureName}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
})

export default FeatureFilter
