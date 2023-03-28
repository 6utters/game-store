import { useCallback, useEffect, useRef, useState } from 'react'

export interface VideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webkitRequestFullscreen?: () => void
}

export const usePlayer = () => {
	const videoRef = useRef<VideoElement | null>(null)

	const [isPlaying, setPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoDuration, setVideoDuration] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const duration = videoRef.current?.duration
		if (duration) setVideoDuration(duration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setPlaying(true)
		} else {
			videoRef.current?.pause()
			setPlaying(false)
		}
	}, [isPlaying])

	const setNewProgress = (secs: number) => {
		if (videoRef.current) {
			setCurrentTime(secs)
			videoRef.current.currentTime = secs
			setProgress((secs / videoDuration) * 100)
		}
	}

	const fullscreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		} else {
			video.requestFullscreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoDuration) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoDuration])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'f':
					fullscreen()
					break
				default:
					return
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	console.log('progress:', progress)

	return {
		videoRef,
		actions: { fullscreen, toggleVideo },
		video: {
			isPlaying,
			currentTime,
			videoDuration,
			progress,
			setNewProgress,
		},
	}
}
