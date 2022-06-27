import { FC } from 'react'
import styles from './Game.module.scss'
import { IGame } from '../../../../models/IGame'

const Game: FC<IGame> = (game) => {
	return <div className={styles.container}>Game</div>
}

export default Game
