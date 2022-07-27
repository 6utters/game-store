import { FC } from 'react'
import styles from './GamePage.module.scss'
import Navbar from '../store/navbar/Navbar'
import Purchase from './Purchase/Purchase'
import Game from './Game/Game'
import { useRouter } from 'next/router'

const GamePage: FC = () => {
	const { query } = useRouter()
	const gameId = Number(query?.id)

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<Game gameId={gameId} />
					<Purchase gameId={gameId} />
				</div>
			</div>
		</>
	)
}

export default GamePage
