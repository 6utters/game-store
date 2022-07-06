import { FC, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { findSelectedFilter } from '../../../../../utils/helpers'
import {
	removeSelectedFeature,
	setSelectedFeatures,
} from '../../../../../store/reducers/gameReducer/GameSlice'
import styles from './featureFilter.module.scss'
import cn from 'classnames'
import { IFeature } from '../../../../../models/IFeature'

const FeatureFilter: FC = () => {
	const [showFeatures, setShowFeatures] = useState(true)
	const { features, selectedFeatures } = useAppSelector((state) => state.game)
	const dispatch = useAppDispatch()

	const genreClickHandler = (feature: IFeature) => {
		if (feature.id === findSelectedFilter(feature.id, selectedFeatures)) {
			dispatch(removeSelectedFeature(feature.id))
		} else {
			dispatch(setSelectedFeatures(feature))
		}
	}

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
					{features.map((feature) => (
						<li
							onClick={() => genreClickHandler(feature)}
							key={feature.id}
							className={cn(styles.feature, {
								[styles.active_feature]:
									feature.id ===
									findSelectedFilter(feature.id, selectedFeatures),
							})}
						>
							<p>{feature.featureName}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default FeatureFilter
