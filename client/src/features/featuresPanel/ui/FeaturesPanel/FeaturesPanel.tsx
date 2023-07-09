import { FC, memo, useCallback, useState } from 'react'
import cn from 'classnames'
import { FilterItem, findSelectedFilterId } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Feature } from '@/entities/Feature'
import { featuresPanelActions } from '../../model/slice/featurePanelSlice'
import { Skeleton, ToggleList } from '@/shared/ui'

import styles from './FeaturesPanel.module.scss'

interface FeatureFilterProps {
	features?: Feature[]
	selectedFeatures?: Feature[]
}

export const FeaturesPanel: FC<FeatureFilterProps> = memo(props => {
	const { features, selectedFeatures = [] } = props
	const [isOpen, setOpen] = useState(true)
	const dispatch = useAppDispatch()

	const toggleHandler = useCallback(() => {
		setOpen(prev => !prev)
	}, [])

	const featureClickHandler = useCallback(
		(feature: Feature) => () => {
			if (selectedFeatures.some(f => f.id === feature.id)) {
				dispatch(featuresPanelActions.removeSelectedFeature(feature.id))
			} else {
				dispatch(featuresPanelActions.selectFeature(feature))
			}
		},
		[dispatch, selectedFeatures],
	)

	if (!features || !features.length) {
		return <Skeleton width={'100%'} height={'32rem'} border={'0.25rem'} />
	}

	return (
		<ToggleList title={'features'} isOpen={isOpen} toggle={toggleHandler}>
			{features?.map(feature => (
				<li
					onClick={featureClickHandler(feature)}
					key={feature.id}
					className={cn(styles.feature_item, {
						[styles.active]:
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
		</ToggleList>
	)
})
