import { FC, memo, useState } from 'react'
import { IGenre } from '@/models/IGenre'
import { IFeature } from '@/models/IFeature'
import { Layout } from '@/shared/ui'
import { Toolbar } from '@/widgets/toolbar'

import styles from './StorePage.module.scss'
import { FetchGameList } from '@/features/fetchGameList'

const StorePage: FC = memo(() => {
	const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([])
	const [selectedFeatures, setSelectedFeatures] = useState<IFeature[]>([])

	// const { data: games, error } = useFetchGameList({
	// 	genres: selectedGenres,
	// 	features: selectedFeatures,
	// })

	return (
		<Layout title={'D&D Games | StorePage page'} withNavbar withFooter>
			<Toolbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.games}>
						<FetchGameList />
					</div>
					<div className={styles.filters}>
						{/*<Filter*/}
						{/*	type={'genres'}*/}
						{/*	selectedFilters={selectedGenres}*/}
						{/*	setSelectedFilters={setSelectedGenres}*/}
						{/*/>*/}
						{/*<Filter*/}
						{/*	type={'features'}*/}
						{/*	selectedFilters={selectedFeatures}*/}
						{/*	setSelectedFilters={setSelectedFeatures}*/}
						{/*/>*/}
						{/*<GenreFilter*/}
						{/*	selectedGenres={selectedGenres}*/}
						{/*	setSelectedGenres={setSelectedGenres}*/}
						{/*/>*/}
						{/*<FeatureFilter*/}
						{/*	selectedFeatures={selectedFeatures}*/}
						{/*	setSelectedFeatures={setSelectedFeatures}*/}
						{/*/>*/}
					</div>
				</div>
			</div>
		</Layout>
	)
})

export default StorePage
