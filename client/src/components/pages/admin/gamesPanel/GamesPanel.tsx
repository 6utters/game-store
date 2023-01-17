import { FC, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import GameModal from './GameModal/GameModal'
import styles from './GamesPanel.module.scss'
import { gamesApi } from '../../../../store/api/games.api'
import { convertImagePath } from '@/shared/lib'

const GamesPanel: FC = () => {
	const { data: games } = gamesApi.useFetchGamesQuery({
		genres: [],
		features: [],
	})
	const [deleteGame, {}] = gamesApi.useDeleteGameMutation()

	const deleteHandler = (gameId: number) => {
		deleteGame(gameId)
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
					{games?.map(game => (
						<div key={game.id} className={styles.game}>
							<img
								className={styles.image}
								src={'http://localhost:5000' + convertImagePath(game.gameImage)}
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
