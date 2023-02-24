import { FC } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib'
import {
	fetchFilteredGameListReducer,
	getSelectedFeatures,
	getSelectedGenres,
} from '@/features/fetchFilteredGameList'
import FeatureFilter from '../featureFilter/FeatureFilter'
import GenreFilter from '../genreFilter/GenreFilter'

import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'

import styles from './FilterPanels.module.scss'


interface FilterPanelsProps {
	genres?: Genre[]

	features?: Feature[]
}

const initialReducers: ReducerList = {
	fetchFilteredGameList: fetchFilteredGameListReducer,
}

const FilterPanels: FC<FilterPanelsProps> = props => {
	const { genres, features } = props
	const selectedGenres = useSelector(getSelectedGenres)
	const selectedFeatures = useSelector(getSelectedFeatures)

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={styles.filters}>
				<GenreFilter genres={genres} selectedGenres={selectedGenres} />
				<FeatureFilter
					features={features}
					selectedFeatures={selectedFeatures}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default FilterPanels
