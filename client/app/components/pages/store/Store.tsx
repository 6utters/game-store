import { FC, useEffect } from 'react'
import styles from './Store.module.scss'
import Navbar from './navbar/Navbar'
import GameCard from './gameCard/GameCard'
import GameService from '../../../services/game.service'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
	setFeatures,
	setGames,
	setGenres,
} from '../../../store/reducers/gameReducer/GameSlice'
import FeatureFilter from './filters/featureFilter/FeatureFilter'
import GenreFilter from './filters/genreFilter/GenreFilter'

const Store: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		GameService.fetchGames().then((data) => dispatch(setGames(data)))
		GameService.fetchGenres().then((data) => dispatch(setGenres(data)))
		GameService.fetchFeatures().then((data) => dispatch(setFeatures(data)))
		// dispatch(fetchCartGames())
	}, [])

	const { games, selectedGenres, selectedFeatures } = useAppSelector(
		(state) => state.game,
	)
	useEffect(() => {
		GameService.fetchGamesByFilter(selectedGenres, selectedFeatures).then(
			(data) => dispatch(setGames(data)),
		)
	}, [selectedFeatures.length, selectedGenres.length])

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.games}>
						<div className={styles.games_list}>
							{games.map((game) => (
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
						<GenreFilter />
						<FeatureFilter />
					</div>
				</div>
			</div>
		</>
	)
}

export default Store
