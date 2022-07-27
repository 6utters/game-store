import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { findSelectedFilter } from '../../../../../utils/helpers'
import styles from './FeatureFilter.module.scss'
import cn from 'classnames'
import { IFeature } from '../../../../../models/IFeature'
import { CSSTransition } from 'react-transition-group'
import { propertiesApi } from '../../../../../store/api/properties.api'

interface IGenreFilterProps {
	selectedFeatures: IFeature[]
	setSelectedFeatures: Dispatch<SetStateAction<IFeature[]>>
}

const FeatureFilter: FC<IGenreFilterProps> = memo(
	({ selectedFeatures, setSelectedFeatures }) => {
		const [showFeatures, setShowFeatures] = useState(true)
		const { data: features } = propertiesApi.useFetchFeaturesQuery()

		const featureClickHandler = (feature: IFeature) => {
			if (feature.id === findSelectedFilter(feature.id, selectedFeatures)) {
				setSelectedFeatures([
					...selectedFeatures.filter((f) => f.id !== feature.id),
				])
			} else {
				setSelectedFeatures([...selectedFeatures, feature])
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
						{features?.map((feature) => (
							<li
								onClick={() => featureClickHandler(feature)}
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
	},
)

export default FeatureFilter
