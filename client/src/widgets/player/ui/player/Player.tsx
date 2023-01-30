import { FC, memo } from 'react'
import { usePlayer } from '../../model/lib/usePlayer/usePlayer'
import cn from 'classnames'

import { BsFullscreen, BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { MdForward10, MdReplay10 } from 'react-icons/md'

import styles from './Player.module.scss'

interface PlayerProps {
	source: string
	className: string
	showPanel?: boolean
}

const Player: FC<PlayerProps> = memo(
	({ source, className, showPanel = true }) => {
		const { videoRef, video, actions } = usePlayer(true)

		return (
			<div className={cn(styles.wrapper, className)}>
				<video
					className={styles.player}
					ref={videoRef}
					src={`http://localhost:5000${source}#t=8`}
					preload='metadata'
				/>
				{showPanel && (
					<div className={styles.panel}>
						<div className={styles.progressBarContainer}>
							<div
								className={styles.progressBar}
								style={{ width: `${video.progress}%` }}
							/>
						</div>
						<div className={styles.controls}>
							<div>
								<button onClick={actions.backward}>
									<MdReplay10 />
								</button>
								<button onClick={actions.toggleVideo} className={styles.play}>
									{video.isPlaying ? <BsPauseFill /> : <BsPlayFill />}
								</button>
								<button onClick={actions.forward}>
									<MdForward10 />
								</button>

								<div className={styles.timeControls}>
									<p className={styles.time}>
										{Math.floor(video.currentTime / 60) +
											':' +
											('0' + Math.floor(video.currentTime % 60)).slice(-2)}
									</p>
									<p> / </p>
									<p className={styles.time}>
										{Math.floor(video.videoDuration / 60) +
											':' +
											('0' + Math.floor(video.videoDuration % 60)).slice(-2)}
									</p>
								</div>
							</div>
							<div>
								<button onClick={actions.fullScreen}>
									<BsFullscreen />
								</button>
							</div>
						</div>
					</div>
				)}
				<div className={styles.shadow} />
			</div>
		)
	},
)

export default Player
