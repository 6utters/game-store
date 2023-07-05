import { FC, memo } from 'react'
import Link from 'next/link'
import { GAME_ROUTE, STORE_ROUTE } from '@/shared/consts'
import { BiSearch } from 'react-icons/bi'
import { useSearch } from '../../lib/useSearch'
import { useOutside } from '@/shared/lib/hooks'
import { filterText } from '@/shared/lib/string/filterText'
import { Icon, Input } from '@/shared/ui'
import cn from 'classnames'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
	className?: string
	initialValue?: string
}

export const SearchBar: FC<SearchBarProps> = memo(props => {
	const { className, initialValue } = props
	const { games, handleSearch, searchTerm, isVisible, hide } =
		useSearch(initialValue)
	const searchRef = useOutside(hide)

	return (
		<div
			data-testid='search'
			className={cn(styles.searchbar_wrapper, className)}
			ref={searchRef}
		>
			<div className={styles.searchbar}>
				<Input
					className={styles.search_input}
					placeholder={'Search'}
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Icon className={styles.search_icon} Icon={BiSearch} />
			</div>
			{isVisible && (
				<div data-testid='search_dropdown' className={styles.search_dropdown}>
					{games?.length ? (
						games.map(game => (
							<div className={styles.search_item} key={game.id}>
								<Link href={`${GAME_ROUTE}/${game.id}`}>
									{filterText(game.gameName, 25)}
								</Link>
							</div>
						))
					) : (
						<div className={styles.search_item}>
							<Link href={STORE_ROUTE}>Browse all</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
})
