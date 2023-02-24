import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { VideoElement } from '../../type/player'

export const usePlayer = (autoStart = false) => {
	const videoRef = useRef<VideoElement | null>(null)
	const videoElementDuration = videoRef.current?.duration

	const [isPlaying, setPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoDuration, setVideoDuration] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (videoElementDuration) setVideoDuration(videoElementDuration)
	}, [videoElementDuration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setPlaying(true)
		} else {
			videoRef.current?.pause()
			setPlaying(false)
		}
	}, [isPlaying])

	const forward = useCallback(() => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}, [videoRef.current])

	const backward = useCallback(() => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}, [videoRef.current])

	const fullScreen = useCallback(() => {
		const video = videoRef.current
		if (!video) return

		if (video.msRequestFullscreen) {
			video.requestFullscreen()
		}
		if (video.mozRequestFullscreen) {
			video.requestFullscreen()
		}
		if (video.webkitRequestFullscreen) {
			video.requestFullscreen()
		}
	}, [videoRef.current])

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
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					backward()
					break
				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}
				case 'f':
					fullScreen()
					break
				default:
					break
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			actions: { fullScreen, forward, backward, toggleVideo },
			video: { isPlaying, currentTime, progress, videoDuration },
		}),
		[currentTime, videoDuration, progress, isPlaying],
	)
}
