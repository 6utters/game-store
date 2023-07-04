import { FC, memo, useCallback } from 'react'

import { ImCross } from 'react-icons/im'
import { useDeleteGenre, useFetchGenres } from '../../api/genreApi'

import styles from './FetchGenreList.module.scss'

//todo: skeleton on loading

export const FetchGenreList: FC = memo(() => {
	const { data: genres, isLoading, error } = useFetchGenres()
	const [deleteGenre] = useDeleteGenre()

	const deleteHandler = useCallback((genreId: number) => {
		deleteGenre(genreId)
	}, [])

	if (!genres || error)
		return <div className={styles.error}>Something wet wrong</div>

	return (
		<div className={styles.genreList}>
			<h3>Genres</h3>
			{genres.map(genre => (
				<div key={genre.id} className={styles.genreItem}>
					<p>{genre.genreName}</p>
					<ImCross onClick={() => deleteHandler(genre.id)} />
				</div>
			))}
		</div>
	)
})
