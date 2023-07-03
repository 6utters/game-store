import { FC, memo, useCallback } from 'react'

import Image from 'next/image'
import { ImCross } from 'react-icons/im'

import { useFetchGameList } from '@/features/fetchFilteredGameList'
import { useDeleteGame } from '@/features/gameInteraction'
import { convertImagePath } from '@/shared/lib'


import styles from './FetchAdminGameList.module.scss'


//todo: skeleton on loading

export const FetchAdminGameList: FC = memo(() => {
	const { data: games, isLoading, error } = useFetchGameList({
		genres: [],
		features: [],
	})
	const [deleteGame] = useDeleteGame()

	const deleteHandler = useCallback((gameId: number) => {
		deleteGame(gameId)
	}, [])

	if (!games || error) return <div className={styles.error}>Something wet wrong</div>

	return (
		<div className={styles.gameList}>
			<h3>Games</h3>
			{games?.map(game => (
				<div key={game.id} className={styles.gameItem}>
					<div className={styles.gameCover}>
						<Image
							src={
								'http://localhost:5000' + convertImagePath(game.gameImage)
							}
							alt='image'
							fill
						/>
					</div>
					<p>{game.gameName}</p>
					<ImCross onClick={() => deleteHandler(game.id)} />
				</div>
			))}
		</div>
	)
})

