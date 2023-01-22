import { FC, useState } from 'react'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'
import { BsFillPlayFill } from 'react-icons/bs'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const GameSlider: FC<{ media: GameMedia[] }> = ({ media }) => {
	const [activeThumb, setActiveThumb] = useState()
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
				thumbs={{ swiper: activeThumb }}
				simulateTouch={false}
				className={'game-media-slider'}
			>
				{sortedMedia.map(mediaItem => (
					<SwiperSlide key={mediaItem.id}>
						{mediaItem.type === 'video' ? (
							<ReactPlayer
								url={`http://localhost:5000${mediaItem.url}`}
								className={'player'}
								controls={true}
								pip={true}
								playing={true}
								muted={true}
								width='100%'
								height='27.5rem'
							/>
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
										url={`http://localhost:5000${mediaItem.url}`}
										className={'player'}
										controls={false}
										pip={true}
										playing={false}
										muted={true}
										width='100%'
										height='h-[3.5rem]'
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

export default GameSlider
