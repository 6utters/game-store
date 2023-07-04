import { FC, memo } from 'react'

import styles from './StorePage.module.scss'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
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
		<MainLayout title={'D&D Games | StorePage page'}>
			<section className={styles.container}>
				<FetchGameList games={games} />
				<FilterPanels {...filters} />
			</section>
		</MainLayout>
	)
})

export default StorePage
