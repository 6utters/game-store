import { FC, memo, useCallback, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import cn from 'classnames'

import { Genre } from '@/entities/Game'
import { fetchFilteredGameListActions } from '@/features/fetchFilteredGameList'

import { FilterItem, findSelectedFilterId } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'

import styles from './GenreFilter.module.scss'

//TODO: use separate component for filters

interface GenreFilterProps {
	selectedGenres?: Genre[]
	genres?: Genre[]
}

const GenreFilter: FC<GenreFilterProps> = memo(props => {
	const { selectedGenres, genres } = props
	const dispatch = useAppDispatch()
	const [showGenres, setShowGenres] = useState(true)

	const genreClickHandler = useCallback(
		(genre: Genre) => {
			if (selectedGenres?.some(g => g.id === genre.id)) {
				dispatch(fetchFilteredGameListActions.removeSelectedGenre(genre.id))
			} else {
				dispatch(fetchFilteredGameListActions.selectGenre(genre))
			}
		},
		[dispatch, selectedGenres],
	)

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
					{genres?.map(genre => (
						<li
							onClick={() => genreClickHandler(genre)}
							key={genre.id}
							className={cn(styles.genre, {
								[styles.active_genre]:
									genre.id ===
									findSelectedFilterId(
										genre.id,
										selectedGenres as FilterItem[],
									),
							})}
						>
							<p>{genre.genreName}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	)
})

export default GenreFilter
