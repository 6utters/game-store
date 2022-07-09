import { FC, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { IGenre } from '../../../../../models/IGenre'
import { findSelectedFilter } from '../../../../../utils/helpers'
import {
	removeSelectedGenre,
	setSelectedGenres,
} from '../../../../../store/reducers/gameReducer/GameSlice'
import styles from './GenreFilter.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'

const GenreFilter: FC = () => {
	const [showGenres, setShowGenres] = useState(true)
	const { genres, selectedGenres } = useAppSelector((state) => state.game)
	const dispatch = useAppDispatch()

	const genreClickHandler = (genre: IGenre) => {
		if (genre.id === findSelectedFilter(genre.id, selectedGenres)) {
			dispatch(removeSelectedGenre(genre.id))
		} else {
			dispatch(setSelectedGenres(genre))
		}
	}

	return (
		<div className={styles.genre_filter}>
			<button
				onClick={() => setShowGenres(!showGenres)}
				className={styles.main_btn}
			>
				<h3>genres</h3>
				<IoIosArrowDown
					className={cn(styles.arrow_icon, {
						[styles.clicked]: showGenres,
					})}
				/>
			</button>
			<CSSTransition
				in={showGenres}
				timeout={250}
				classNames={{
					enter: styles.show_genres_enter,
					enterActive: styles.show_genres_enter_active,
					exit: styles.show_genres_exit,
					exitActive: styles.show_genres_exit_active,
				}}
				unmountOnExit
			>
				<ul className={styles.genres_list}>
					{genres.map((genre) => (
						<li
							onClick={() => genreClickHandler(genre)}
							key={genre.id}
							className={cn(styles.genre, {
								[styles.active_genre]:
									genre.id === findSelectedFilter(genre.id, selectedGenres),
							})}
						>
							<p>{genre.genreName}</p>
						</li>
					))}
				</ul>
			</CSSTransition>
		</div>
	)
}

export default GenreFilter
