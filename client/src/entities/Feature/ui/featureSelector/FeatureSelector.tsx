import { FC, memo, useMemo } from 'react'
import { Feature } from '@/entities/Feature'
import {
	MultipleSelect,
	Option,
} from '@/shared/ui/multipleSelect/MultipleSelect'

import styles from './FeatureSelector.module.scss'

interface FeaturesSelectorProps {
	features?: Feature[]
	currentOptions: string[]
	setCurrentOptions: (option: any) => void
}

export const FeatureSelector: FC<FeaturesSelectorProps> = memo(props => {
	const { currentOptions, setCurrentOptions, features } = props

	const featuresOptions: Option[] | undefined = useMemo(
		() =>
			features?.map(f => ({
				value: f.featureName,
				label: f.featureName,
			})),
		[features],
	)

	return (
		<div className={styles.feature_selector}>
			<MultipleSelect
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				options={featuresOptions}
				placeHolder={'Choose features for the game'}
			/>
		</div>
	)
})
