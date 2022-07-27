import { FC, useState } from 'react'
import styles from './GenresPanel.module.scss'
import { ImCross } from 'react-icons/im'
import { FiPlus } from 'react-icons/fi'
import GenreModal from './GenreModal/GenreModal'
import Spinner from '../../../ui/Spinner/Spinner'
import { propertiesApi } from '../../../../store/api/properties.api'

const GenresPanel: FC = () => {
	const { data: genres, isLoading } = propertiesApi.useFetchGenresQuery()
	const [deleteGenre] = propertiesApi.useDeleteGenreMutation()

	const deleteHandler = (genreId: number) => {
		deleteGenre(genreId)
	}

	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			{isLoading ? (
				<Spinner />
			) : (
				<div className={styles.content}>
					<div className={styles.add_genre}>
						<FiPlus onClick={() => setModalActive(true)} />
						<GenreModal active={modalActive} setActive={setModalActive} />
					</div>
					<div className={styles.genreList}>
						<h3>Genres</h3>
						{genres?.map((genre) => (
							<div key={genre.id} className={styles.genre}>
								<p>{genre.genreName}</p>
								<ImCross onClick={() => deleteHandler(genre.id)} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default GenresPanel
