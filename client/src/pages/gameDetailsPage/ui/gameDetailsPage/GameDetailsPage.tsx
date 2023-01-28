import { FC, memo } from 'react'

import { Layout } from '@/widgets/layout'
import { GameSchema } from '@/entities/Game'

import { GameDetails } from '../gameDetails/GameDetails'
import { Toolbar } from '@/widgets/toolbar'
import Purchase from '@/components/pages/gamePage/Purchase/Purchase'

import styles from './GameDetailsPage.module.scss'

interface GamePageProps {
	game?: GameSchema
}

const GameDetailsPage: FC<GamePageProps> = memo(({ game }) => {
	return (
		<Layout title={`D&D Games | ${game?.gameName}`} withNavbar withFooter>
			<Toolbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<GameDetails game={game} />
					<Purchase game={game} />
				</div>
			</div>
		</Layout>
	)
})

export default GameDetailsPage
