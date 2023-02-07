import { FC, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import GameModal from './GameModal/GameModal'
import styles from './GamesPanel.module.scss'
import { convertImagePath } from '@/shared/lib'
import {
	fetchFilteredGamesApi,
	useFetchGameList,
} from '@/features/fetchFilteredGameList/model/api/fetchGameList'
import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

const GamesPanel: FC = () => {
	const { data: games } = useFetchGameList({
		genres: [],
		features: [],
	})
	const [deleteGame, {}] = fetchFilteredGamesApi.useDeleteGameMutation()

	const deleteHandler = (gameId: number) => {
		deleteGame(gameId)
	}

	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<Layout
			withNavbar={false}
			title={'D&D Games | Admin panel | Games Panel'}
			withFooter={false}
		>
			<AdminLayout>
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
										src={
											'http://localhost:5000' + convertImagePath(game.gameImage)
										}
										alt='image'
									/>
									<p>{game.gameName}</p>
									<ImCross onClick={() => deleteHandler(game.id)} />
								</div>
							))}
						</div>
					</div>
				</div>
			</AdminLayout>
		</Layout>
	)
}

export default GamesPanel
