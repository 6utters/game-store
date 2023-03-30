import { FC, memo } from 'react'

import { Layout } from '@/widgets/layout'
import { GameSchema } from '@/entities/Game'

import { GameDetails } from '../gameDetails/GameDetails'
import { PurchaseDetails } from '../purchaseDetails/PurchaseDetails'

import styles from './GameDetailsPage.module.scss'

interface GamePageProps {
	game?: GameSchema
}

const GameDetailsPage: FC<GamePageProps> = memo(({ game }) => {
	return (
		<Layout title={`D&D Games | ${game?.gameName}`}>
			<div className={styles.container}>
				<GameDetails game={game} />
				<PurchaseDetails game={game} />
			</div>
		</Layout>
	)
})

export default GameDetailsPage
