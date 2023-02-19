import { FC, memo } from 'react'
import { Toolbar } from '@/widgets/toolbar'

import styles from './StorePage.module.scss'
import { Layout } from '@/widgets/layout'
import { GameSchema } from '@/entities/Game'
import { FetchGameList } from '@/features/fetchFilteredGameList'
import FilterPanels from '@/widgets/filterPanels/ui/filterPanels/FilterPanels'
import { Feature } from '@/entities/Feature'
import { Genre } from '@/entities/Genre'

interface StorePageProps {
	games?: GameSchema[]
	features?: Feature[]
	genres?: Genre[]
}

const StorePage: FC<StorePageProps> = memo(props => {
	const { games, ...filters } = props
	return (
		<Layout title={'D&D Games | StorePage page'} withNavbar withFooter>
			<Toolbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<FetchGameList games={games} />
					<FilterPanels {...filters} />
				</div>
			</div>
		</Layout>
	)
})

export default StorePage
