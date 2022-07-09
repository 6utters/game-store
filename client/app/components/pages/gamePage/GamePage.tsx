import { FC } from 'react'
import { IGame } from '../../../models/IGame'
import styles from './GamePage.module.scss'
import Navbar from '../store/navbar/Navbar'
import Purchase from './Purchase/Purchase'
import Game from './Game/Game'

export interface IGameProps {
	game: IGame
}

const GamePage: FC<IGame> = (game) => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<Game {...game} />
					<Purchase {...game} />
				</div>
			</div>
		</>
	)
}

export default GamePage
