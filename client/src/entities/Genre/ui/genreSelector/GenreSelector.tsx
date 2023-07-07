import { FC, memo, useMemo } from 'react'
import { MultipleSelect, Option } from '@/shared/ui'

import styles from './GenreSelector.module.scss'
import { Genre } from '@/entities/Genre'

interface GenresSelectorProps {
	genres?: Genre[]
	currentOptions: string[]
	setCurrentOptions: (options: string[]) => void
}

export const GenreSelector: FC<GenresSelectorProps> = memo(props => {
	const { setCurrentOptions, currentOptions, genres } = props

	const genreOptions = useMemo<Option[] | undefined>(
		() =>
			genres?.map(g => ({
				value: g.genreName,
				label: g.genreName,
			})),
		[genres],
	)

	return (
		<div className={styles.genres_selector}>
			<MultipleSelect
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				options={genreOptions}
				placeHolder={'Choose genres for the game'}
			/>
		</div>
	)
})
