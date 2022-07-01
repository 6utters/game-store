import { FC } from 'react'
import styles from './Game.module.scss'
import { IGame } from '../../../../models/IGame'
import dynamic from 'next/dynamic'
import GameSlider from './GameSlider/GameSlider'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Game: FC<IGame> = (game) => {
	// const firstVideo = game.gameMedia.find((media) => media.type === 'video')
	// const images = game.gameMedia.filter((media) => media.type === 'image')
	// const mainVideoUrl = `http://localhost:5000${firstVideo?.url}`

	return (
		<div className={styles.container}>
			<div>rating</div>
			<div className={styles.sliderWrapper}>
				<GameSlider media={game.gameMedia} />
			</div>
			{/*<div className={styles.wrapper}>*/}
			{/*	<ReactPlayer*/}
			{/*		url={mainVideoUrl}*/}
			{/*		controls={true}*/}
			{/*		pip={true}*/}
			{/*		className={styles.player}*/}
			{/*		width='100%'*/}
			{/*		height='100%'*/}
			{/*		playing={true}*/}
			{/*		muted={true}*/}
			{/*	/>*/}
			{/*</div>*/}
		</div>
	)
}

export default Game
