import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import styles from './GenresPanel.module.scss'
import GameService from '../../../../services/game.service'
import { setGenres } from '../../../../store/reducers/gameReducer/GameSlice'
import { ImCross } from 'react-icons/im'
import { deleteGenre } from '../../../../store/reducers/gameReducer/gameAC'
import { FiPlus } from 'react-icons/fi'
import GenreModal from './GenreModal/GenreModal'
import Spinner from '../../../ui/Spinner/Spinner'

const GenresPanel: FC = () => {
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		GameService.fetchGenres().then((data) => dispatch(setGenres(data)))
		setLoading(false)
	}, [])
	const { genres } = useAppSelector((state) => state.game)

	const deleteHandler = (genreId: number) => {
		dispatch(deleteGenre(genreId))
	}

	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			{loading ? (
				<Spinner />
			) : (
				<div className={styles.content}>
					<div className={styles.add_genre}>
						<FiPlus onClick={() => setModalActive(true)} />
						<GenreModal active={modalActive} setActive={setModalActive} />
					</div>
					<div className={styles.genreList}>
						<h3>Genres</h3>
						{genres.map((genre) => (
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
