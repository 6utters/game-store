import { FC, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { IGenre } from '../../../../../models/IGenre'
import { findSelectedFilter } from '../../../../../utils/helpers'
import {
	removeSelectedGenre,
	setSelectedGenres,
} from '../../../../../store/reducers/gameReducer/GameSlice'
import styles from './genreFilter.module.scss'
import cn from 'classnames'

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
			{showGenres && (
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
			)}
		</div>
	)
}

export default GenreFilter
