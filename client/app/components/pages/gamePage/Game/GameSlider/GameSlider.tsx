import { FC, useState } from 'react'
import { IGameMedia } from '../../../../../models/IGameMedia'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'
import { BsFillPlayFill } from 'react-icons/bs'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const GameSlider: FC<{ media: IGameMedia[] }> = ({ media }) => {
	const images = media.filter((m) => m.type === 'image')
	const [activeThumb, setActiveThumb] = useState()

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
				{media.map((mediaItem) => (
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
				{media.map((mediaItem) => (
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
