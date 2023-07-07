import { FC, memo } from 'react'
import cn from 'classnames'
import styles from './GameList.module.scss'
import Image from 'next/image'
import { convertImagePath } from '@/shared/lib'
import { ImCross } from 'react-icons/im'
import { GameSchema } from '@/entities/Game'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { SERVER_URL } from '@/shared/api'
import { Skeleton } from '@/shared/ui'

interface GameListProps {
	className?: string
	games?: GameSchema[]
	isLoading: boolean
	error?: FetchBaseQueryError | SerializedError
	onDelete: (featureId: number) => void
}

export const GameList: FC<GameListProps> = memo(props => {
	const { className, error, onDelete, games, isLoading } = props

	if (isLoading) {
		return (
			<div className={cn(styles.game_list, className)}>
				<Skeleton width={'5rem'} height={'1rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
				<Skeleton width={'100%'} height={'3.5rem'} border={'0.25rem'} />
			</div>
		)
	}

	if (!games || error)
		return <div className={styles.error}>Something went wrong</div>

	return (
		<div className={cn(styles.game_list, className)}>
			<h3>Games</h3>
			{games.map(game => (
				<div key={game.id} className={styles.game_item}>
					<div className={styles.game_cover}>
						<Image
							src={SERVER_URL + convertImagePath(game.gameImage)}
							alt='image'
							width={100}
							height={100}
							sizes={'100vh'}
						/>
					</div>
					<p>{game.gameName}</p>
					<ImCross onClick={() => onDelete(game.id)} />
				</div>
			))}
		</div>
	)
})
