import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib'
import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'
import {
	GenresPanel,
	genresPanelReducer,
	getSelectedGenres,
} from '@/features/genresPanel'
import {
	FeaturesPanel,
	featuresPanelReducer,
	getSelectedFeatures,
} from '@/features/featuresPanel'
import styles from './Filters.module.scss'

interface FilterPanelsProps {
	genres?: Genre[]
	features?: Feature[]
}

const initialReducers: ReducerList = {
	genresPanel: genresPanelReducer,
	featuresPanel: featuresPanelReducer,
}

export const Filters: FC<FilterPanelsProps> = memo(props => {
	const { genres, features } = props
	const selectedGenres = useSelector(getSelectedGenres)
	const selectedFeatures = useSelector(getSelectedFeatures)

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<aside className={styles.filters}>
				<GenresPanel genres={genres} selectedGenres={selectedGenres} />
				<FeaturesPanel
					features={features}
					selectedFeatures={selectedFeatures}
				/>
			</aside>
		</DynamicModuleLoader>
	)
})
