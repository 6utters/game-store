import { FC, memo } from 'react'
import Link from 'next/link'

import { GAME_ROUTE } from '@/shared/consts'
import { convertImagePath } from '@/shared/lib'

import styles from './GameCard.module.scss'
import Image from 'next/image'

interface IGameCardProps {
	name: string
	price: number
	image: string
	gameId: number
}

export const GameCard: FC<IGameCardProps> = memo(
	({ name, price, image, gameId }) => {
		const actualPrice = price - 0.01

		return (
			<li className={styles.card_wrapper}>
				<Link href={`${GAME_ROUTE}/${gameId}`} className={styles.card}>
					<div className={styles.cover}>
						<Image
							src={`http://localhost:5000${convertImagePath(image)}`}
							alt='game_card_cover'
							width='100'
							height='100'
							sizes='100vw'
						/>
					</div>
					<div className={styles.info}>
						<div className={styles.title}>
							<h3>{name}</h3>
						</div>
						<div className={styles.price}>
							<p>{`$${actualPrice}`}</p>
						</div>
					</div>
				</Link>
			</li>
		)
	},
)
