import { FC, useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import GameService from '../../../../services/game.service'
import { setGames } from '../../../../store/reducers/gameReducer/GameSlice'
import GameModal from './GameModal/GameModal'
import styles from './GamesPanel.module.scss'
import { deleteGame } from '../../../../store/reducers/gameReducer/gameAC'
import { convertImage } from '../../../../utils/helpers'

const GamesPanel: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		GameService.fetchGames().then((data) => dispatch(setGames(data)))
	}, [])
	const { games } = useAppSelector((state) => state.game)

	const deleteHandler = (gameId: number) => {
		dispatch(deleteGame(gameId))
	}

	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.add_game}>
					<FiPlus onClick={() => setModalActive(true)} />
					<GameModal active={modalActive} setActive={setModalActive} />
				</div>
				<div className={styles.gameList}>
					<h3>Games</h3>
					{games.map((game) => (
						<div key={game.id} className={styles.game}>
							<img
								className={styles.image}
								src={'http://localhost:5000' + convertImage(game.gameImage)}
								alt='image'
							/>
							<p>{game.gameName}</p>
							<ImCross onClick={() => deleteHandler(game.id)} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default GamesPanel
