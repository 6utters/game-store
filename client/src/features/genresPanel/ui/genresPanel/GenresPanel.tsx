import { FC, memo, useCallback, useState } from 'react'
import { Genre } from '@/entities/Genre'
import { useAppDispatch } from '@/shared/lib/hooks'
import { genresPanelActions } from '../../model/slice/genresPanelSlice'
import { Skeleton, ToggleList } from '@/shared/ui'
import cn from 'classnames'
import { FilterItem, findSelectedFilterId } from '@/shared/lib'
import styles from './GenresPanel.module.scss'

interface GenreFilterProps {
	selectedGenres?: Genre[]
	genres?: Genre[]
}

export const GenresPanel: FC<GenreFilterProps> = memo(props => {
	const { selectedGenres = [], genres } = props
	const [isOpen, setOpen] = useState(true)
	const dispatch = useAppDispatch()

	const toggleHandler = useCallback(() => {
		setOpen(prev => !prev)
	}, [])

	const genreClickHandler = useCallback(
		(genre: Genre) => () => {
			if (selectedGenres.some(g => g.id === genre.id)) {
				dispatch(genresPanelActions.removeSelectedGenre(genre.id))
			} else {
				dispatch(genresPanelActions.selectGenre(genre))
			}
		},
		[dispatch, selectedGenres],
	)

	if (!genres || !genres.length) {
		return <Skeleton width={'100%'} height={'32rem'} border={'0.25rem'} />
	}

	return (
		<ToggleList title={'genres'} isOpen={isOpen} toggle={toggleHandler}>
			{genres.map(genre => (
				<li
					onClick={genreClickHandler(genre)}
					key={genre.id}
					className={cn(styles.genre_item, {
						[styles.active]:
							genre.id ===
							findSelectedFilterId(genre.id, selectedGenres as FilterItem[]),
					})}
				>
					<p>{genre.genreName}</p>
				</li>
			))}
		</ToggleList>
	)
})
