import { FC, memo } from 'react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import cn from 'classnames'
import { Genre } from '@/entities/Genre'
import { ImCross } from 'react-icons/im'

import styles from './GenreList.module.scss'
import { Skeleton } from '@/shared/ui'

interface GenreListProps {
	className?: string
	genres?: Genre[]
	isLoading: boolean
	error?: FetchBaseQueryError | SerializedError
	onDelete: (genreId: number) => void
}

export const GenreList: FC<GenreListProps> = memo(props => {
	const { className, genres, isLoading, onDelete, error } = props

	if (isLoading) {
		return (
			<div className={cn(styles.genre_list, className)}>
				<Skeleton width={'5rem'} height={'1rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
			</div>
		)
	}

	if (!genres || error)
		return <div className={styles.error}>Something went wrong</div>

	return (
		<div className={cn(styles.genre_list, className)}>
			<h3 className={styles.heading}>Genres</h3>
			{genres.map(genre => (
				<div key={genre.id} className={styles.genre_item}>
					<p>{genre.genreName}</p>
					<ImCross onClick={() => onDelete(genre.id)} />
				</div>
			))}
		</div>
	)
})
