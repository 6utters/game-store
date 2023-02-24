import { FC, memo, useMemo } from 'react'

import { MultipleSelect, Option } from '@/shared/ui'
import { useFetchGenres } from '@/features/genreInteraction'

import styles from './GenresSelector.module.scss'

interface GenresSelectorProps {
	currentOptions: string[]
	setCurrentOptions: (option: any) => void
}

export const GenresSelector: FC<GenresSelectorProps> = memo(props => {
	const { setCurrentOptions, currentOptions } = props
	const { data: genres } = useFetchGenres()

	const genreOptions: Option[] | undefined = useMemo(
		() =>
			genres?.map(g => ({
				value: g.genreName,
				label: g.genreName,
			})),
		[genres],
	)

	return (
		<div className={styles.genresSelector}>
			<MultipleSelect
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				options={genreOptions}
				placeHolder={'Choose genres for the game'}
			/>
		</div>
	)
})
