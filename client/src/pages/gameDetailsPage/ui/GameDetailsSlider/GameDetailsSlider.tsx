import { FC } from 'react'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'
import { Carousel } from '@/shared/ui/carousel/carousel/Carousel'

interface GameSliderProps {
	media: GameMedia[]
}

export const GameSlider: FC<GameSliderProps> = ({ media }) => {
	const videos = media.filter(m => m.type === 'video')
	const images = media.filter(m => m.type === 'image')

	return <Carousel mediaItems={[...videos, ...images]} />
}
