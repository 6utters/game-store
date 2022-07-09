import { FC, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { findSelectedFilter } from '../../../../../utils/helpers'
import {
	removeSelectedFeature,
	setSelectedFeatures,
} from '../../../../../store/reducers/gameReducer/GameSlice'
import styles from './FeatureFilter.module.scss'
import cn from 'classnames'
import { IFeature } from '../../../../../models/IFeature'
import { CSSTransition } from 'react-transition-group'

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
			<CSSTransition
				in={showFeatures}
				timeout={250}
				classNames={{
					enter: styles.show_features_enter,
					enterActive: styles.show_features_enter_active,
					exit: styles.show_features_exit,
					exitActive: styles.show_features_exit_active,
				}}
				unmountOnExit
			>
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
			</CSSTransition>
		</div>
	)
}

export default FeatureFilter
