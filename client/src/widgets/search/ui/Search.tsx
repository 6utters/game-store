import { FC, memo } from 'react'
import Link from 'next/link'

import { GAME_ROUTE, STORE_ROUTE } from '@/shared/consts'
import { BiSearch } from 'react-icons/bi'

import { useSearch } from '../model/lib/useSearch'
import { filterText } from '@/shared/lib/string/filterText'

import styles from './Search.module.scss'

export const Search: FC = () => {
	const { data, handleSearch, searchTerm, visible } = useSearch()

	const Icon = memo(() => <BiSearch className={styles.search_icon} />)

	return (
		<div data-testid='search' className={styles.container} ref={visible.ref}>
			<div className={styles.input}>
				<input
					type='text'
					placeholder={'Search'}
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Icon />
			</div>
			{visible.isShown && (
				<div
					data-testid='search_dropdown'
					className={styles.drop_down}
					ref={visible.ref}
				>
					{data?.length ? (
						data.map(game => (
							<div className={styles.search_item} key={game.id}>
								<Link href={GAME_ROUTE + '/' + game.id}>
									{filterText(game.gameName, 25)}
								</Link>
							</div>
						))
					) : (
						<div className={styles.no_games}>
							<Link href={STORE_ROUTE}>Browse all</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}
