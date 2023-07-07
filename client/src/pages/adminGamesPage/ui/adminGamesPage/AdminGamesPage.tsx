import { FC, memo, useCallback, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'
import { useFetchGameList } from '@/features/fetchFilteredGameList'
import { GameList, useDeleteGame } from '@/entities/Game'
import { AdminGamesPageModal } from '../adminGamePageModal/AdminGamePageModal'
import styles from './AdminGamesPage.module.scss'

export const AdminGamesPage: FC = memo(() => {
	const [modalActive, setModalActive] = useState(false)
	const {
		data: games,
		isLoading,
		error,
	} = useFetchGameList({
		genres: [],
		features: [],
	})
	const [deleteGame] = useDeleteGame()

	const deleteHandler = useCallback(
		(gameId: number) => {
			deleteGame(gameId)
		},
		[deleteGame],
	)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [])

	return (
		<MainLayout
			withNavbar={true}
			title={'D&D Games | AdminPage panel | Games Panel'}
			withFooter={false}
		>
			<AdminLayout>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.add_game}>
							<FiPlus onClick={() => setModalActive(true)} />
						</div>
						<GameList
							games={games}
							isLoading={isLoading}
							error={error}
							onDelete={deleteHandler}
						/>
						{modalActive && (
							<AdminGamesPageModal
								isOpen={modalActive}
								onClose={onModalClose}
							/>
						)}
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
})
