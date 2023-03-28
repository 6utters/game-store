import { FC, memo, useRef, useState } from 'react'
import cn from 'classnames'
import { usePlayer } from '@/shared/lib/hooks'

import styles from './Player.module.scss'
import {
	BsArrowsFullscreen,
	BsFillGearFill,
	BsPauseFill,
	BsPlayFill,
	BsVolumeDown,
} from 'react-icons/bs'

interface PlayerProps {
	source: string
	className: string
}

export const Player: FC<PlayerProps> = memo(({ source, className }) => {
	const { videoRef, video, actions } = usePlayer()
	const [visibleControls, setVisibleControls] = useState(false)
	const progressBarRef = useRef<HTMLDivElement | null>(null)

	const onMouseEnterHandler = () => {
		if (!visibleControls) setVisibleControls(true)
		setVisibleControls(true)
	}

	const onMouseLeaveHandler = () => {
		setTimeout(() => {
			setVisibleControls(false)
		}, 1000)
	}

	const mouseClickHandler = (e: any) => {
		if (progressBarRef.current) {
			const expectedTimeCode =
				e.clientX - progressBarRef.current?.getClientRects()[0].x
			const videoWidth = progressBarRef.current?.getClientRects()[0].width
			const timeCodeSecs = (video.videoDuration * expectedTimeCode) / videoWidth
			console.log('timeCodeSecs:', timeCodeSecs)
			video.setNewProgress(timeCodeSecs)
		}
	}

	return (
		<div
			className={cn(styles.wrapper, className)}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			<video
				className={styles.player}
				ref={videoRef}
				src={source}
				preload='metadata'
			/>
			<div className={styles.play_btn}></div>
			<button />
			<div
				className={cn(styles.panel, {
					[styles.panel_visible]: visibleControls,
				})}
			>
				<div className={styles.progress}>
					<div className={styles.progress_item} ref={progressBarRef}>
						<button
							className={styles.progress_btn}
							onClick={mouseClickHandler}
						/>
						<div className={styles.progress_panel}>
							<span
								style={{ width: `${video.progress}%` }}
								className={styles.video_progress}
							/>
							<span
								style={{ left: `${video.progress}%` }}
								className={styles.circle}
							/>
							<span className={styles.progress_line} />
						</div>
					</div>
				</div>
				<div className={styles.play} onClick={actions.toggleVideo}>
					<button className={styles.icon_button}>
						<span className={styles.icon}>
							{video.isPlaying ? <BsPauseFill /> : <BsPlayFill />}
						</span>
					</button>
				</div>
				<div className={styles.volume}>
					<button className={styles.icon_button}>
						<span className={styles.icon}>
							<BsVolumeDown />
						</span>
					</button>
				</div>
				<div className={styles.timing}>
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
				<div className={styles.settings}>
					<button className={styles.icon_button}>
						<span className={styles.icon}>
							<BsFillGearFill />
						</span>
					</button>
				</div>
				<div className={styles.fullscreen}>
					<button className={styles.icon_button}>
						<span className={styles.icon}>
							<BsArrowsFullscreen />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
})
