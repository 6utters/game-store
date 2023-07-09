import { FC, memo } from 'react'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { GameSchema } from '@/entities/Game'
import { FetchGameList } from '@/features/fetchFilteredGameList'
import { Filters } from '@/widgets/filters'
import { Feature } from '@/entities/Feature'
import { Genre } from '@/entities/Genre'

import styles from './StorePage.module.scss'

interface StorePageProps {
	games?: GameSchema[]
	features?: Feature[]
	genres?: Genre[]
}

const StorePage: FC<StorePageProps> = memo(props => {
	const { games, ...filters } = props
	return (
		<MainLayout title={'D&D Games | StorePage page'}>
			<section className={styles.container} data-testid={'StorePage'}>
				<FetchGameList games={games} />
				<Filters {...filters} />
			</section>
		</MainLayout>
	)
})

export default StorePage
