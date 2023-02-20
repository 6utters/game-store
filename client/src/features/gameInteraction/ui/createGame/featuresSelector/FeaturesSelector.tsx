import { FC, memo, useMemo } from 'react'

import {
	MultipleSelect,
	Option,
} from '@/shared/ui/multipleSelect/MultipleSelect'
import { useFetchFeatures } from '@/features/featureInteraction'

import styles from './FeaturesSelector.module.scss'

interface FeaturesSelectorProps {
	currentOptions: string[]
	setCurrentOptions: (option: any) => void
}

export const FeaturesSelector: FC<FeaturesSelectorProps> = memo(props => {
	const { currentOptions, setCurrentOptions } = props
	const { data: features } = useFetchFeatures()

	const featuresOptions: Option[] | undefined = useMemo(
		() =>
			features?.map(f => ({
				value: f.featureName,
				label: f.featureName,
			})),
		[features],
	)

	return (
		<div className={styles.featureSelector}>
			<MultipleSelect
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				options={featuresOptions}
				placeHolder={'Choose features for the game'}
			/>
		</div>
	)
})
