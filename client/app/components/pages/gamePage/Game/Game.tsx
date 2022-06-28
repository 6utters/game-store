import { FC } from 'react'
import styles from './Game.module.scss'
import { IGame } from '../../../../models/IGame'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Game: FC<IGame> = (game) => {
	return (
		<div className={styles.container}>
			<div>rating</div>
			<div className={styles.wrapper}>
				<ReactPlayer
					url='http://localhost:5000/6cf2f4de-5bac-44fe-bc45-23fb1d8f912f.mp4'
					controls={true}
					pip={true}
					className={styles.player}
					width='100%'
					height='100%'
					playing={true}
					muted={true}
				/>
			</div>
		</div>
	)
}

export default Game
