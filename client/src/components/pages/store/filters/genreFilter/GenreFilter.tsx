import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IGenre } from '../../../../../models/IGenre'
import styles from './GenreFilter.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { propertiesApi } from '../../../../../store/api/properties.api'
import { findSelectedFilterId } from '@/shared/lib'

interface IGenreFilterProps {
	selectedGenres: IGenre[]
	setSelectedGenres: Dispatch<SetStateAction<IGenre[]>>
}

const GenreFilter: FC<IGenreFilterProps> = memo(
	({ selectedGenres, setSelectedGenres }) => {
		//TODO: use separate component for filters
		const [showGenres, setShowGenres] = useState(true)
		const { data: genres } = propertiesApi.useFetchGenresQuery()

		const genreClickHandler = (genre: IGenre) => {
			if (genre.id === findSelectedFilterId(genre.id, selectedGenres)) {
				setSelectedGenres([...selectedGenres.filter(g => g.id !== genre.id)])
			} else {
				setSelectedGenres([...selectedGenres, genre])
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
						{genres?.map(genre => (
							<li
								onClick={() => genreClickHandler(genre)}
								key={genre.id}
								className={cn(styles.genre, {
									[styles.active_genre]:
										genre.id === findSelectedFilterId(genre.id, selectedGenres),
								})}
							>
								<p>{genre.genreName}</p>
							</li>
						))}
					</ul>
				</CSSTransition>
			</div>
		)
	},
)

export default GenreFilter
