import { FC, useState } from 'react'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'
import { BsFillPlayFill } from 'react-icons/bs'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'

const ReactPlayer = dynamic(() => import('@/widgets/player/ui/player/Player'), {
	ssr: false,
})
//todo: refactor slider

interface GameSliderProps {
	media: GameMedia[]
}

export const GameSlider: FC<GameSliderProps> = ({ media }) => {
	// @ts-ignore
	const [activeThumb, setActiveThumb] = useState<Swiper>(null)
	const videos = media.filter(m => m.type === 'video')
	const images = media.filter(m => m.type === 'image')
	const sortedMedia = [...videos, ...images]

	return (
		<>
			<Swiper
				initialSlide={1}
				spaceBetween={10}
				navigation={true}
				modules={[Navigation, Thumbs]}
				thumbs={{
					swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
				}}
				simulateTouch={false}
				className={'game-media-slider'}
			>
				{sortedMedia.map(mediaItem => (
					<SwiperSlide key={mediaItem.id}>
						{mediaItem.type === 'video' ? (
							<ReactPlayer source={mediaItem.url} className={'player'} />
						) : (
							<img
								src={`http://localhost:5000${mediaItem.url}`}
								alt='image'
								draggable={false}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				// @ts-ignore
				onSwiper={setActiveThumb}
				spaceBetween={20}
				slidesPerView={6}
				modules={[Navigation, Thumbs]}
				className={'game-media-slider-thumbs'}
			>
				{sortedMedia.map(mediaItem => (
					<SwiperSlide key={mediaItem.id}>
						<div className={'game-media-slider-thumbs-wrapper'}>
							{mediaItem.type === 'video' ? (
								<>
									<ReactPlayer
										source={mediaItem.url}
										className={'player'}
										showPanel={false}
									/>
									<div className={'play-btn'}>
										<BsFillPlayFill className={'icon'} />
									</div>
								</>
							) : (
								<img
									src={`http://localhost:5000${mediaItem.url}`}
									alt='image'
									draggable={false}
								/>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
