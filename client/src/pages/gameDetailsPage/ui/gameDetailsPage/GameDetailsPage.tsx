import { FC } from 'react'

import { Layout } from '@/widgets/layout'
import { GameSchema } from '@/entities/Game'

import GameSide from '@/components/pages/gamePage/Game/Game'
import Purchase from '@/components/pages/gamePage/Purchase/Purchase'

import styles from './GameDetailsPage.module.scss'

interface GamePageProps {
	game?: GameSchema
}

const GameDetailsPage: FC<GamePageProps> = ({ game }) => {
	return (
		<Layout title={`D&D Games | ${game?.gameName}`} withNavbar withFooter>
			<div className={styles.container}>
				<div className={styles.content}>
					{game && (
						<>
							<GameSide gameId={game?.id} />
							<Purchase gameId={game?.id} />
						</>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default GameDetailsPage
