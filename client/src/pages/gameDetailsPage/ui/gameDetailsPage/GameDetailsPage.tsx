import { FC, memo } from 'react'

import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { GameSchema } from '@/entities/Game'

import { GameDetails } from '../gameDetails/GameDetails'
import { PurchaseDetails } from '../purchaseDetails/PurchaseDetails'

import styles from './GameDetailsPage.module.scss'

interface GamePageProps {
	game?: GameSchema
}

const GameDetailsPage: FC<GamePageProps> = memo(({ game }) => {
	console.log('game:', game)
	return (
		<MainLayout title={`D&D Games | ${game?.gameName}`}>
			<div className={styles.container} data-testid={'GamePage'}>
				<GameDetails game={game} />
				<PurchaseDetails game={game} />
			</div>
		</MainLayout>
	)
})

export default GameDetailsPage
