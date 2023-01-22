import { FC, memo, useState } from 'react'
import { Toolbar } from '@/widgets/toolbar'

import styles from './StorePage.module.scss'
import { Layout } from '@/widgets/layout'
import { Feature, GameCardList, GameSchema, Genre } from '@/entities/Game'

interface StorePageProps {
	games?: GameSchema[]
}

const StorePage: FC<StorePageProps> = memo(({ games }) => {
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
	const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([])

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
						<GameCardList games={games} />
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
