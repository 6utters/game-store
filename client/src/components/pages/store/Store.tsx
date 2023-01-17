import { FC, useState } from 'react'
import styles from './Store.module.scss'
import Navbar from './navbar/Navbar'
import GameCard from './gameCard/GameCard'
import { gamesApi } from '../../../store/api/games.api'
import { IGenre } from '../../../models/IGenre'
import { IFeature } from '../../../models/IFeature'
import FeatureFilter from './filters/featureFilter/FeatureFilter'
import GenreFilter from './filters/genreFilter/GenreFilter'

const Store: FC = () => {
	const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([])
	const [selectedFeatures, setSelectedFeatures] = useState<IFeature[]>([])

	const { data: games, error } = gamesApi.useFetchGamesQuery({
		genres: selectedGenres,
		features: selectedFeatures,
	})

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.games}>
						<div className={styles.games_list}>
							{error && 'Error'}
							{games?.map((game) => (
								<GameCard
									key={game.id}
									gameId={game.id}
									name={game.gameName}
									price={game.gamePrice}
									image={game.gameImage}
								/>
							))}
						</div>
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
						<GenreFilter
							selectedGenres={selectedGenres}
							setSelectedGenres={setSelectedGenres}
						/>
						<FeatureFilter
							selectedFeatures={selectedFeatures}
							setSelectedFeatures={setSelectedFeatures}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Store
