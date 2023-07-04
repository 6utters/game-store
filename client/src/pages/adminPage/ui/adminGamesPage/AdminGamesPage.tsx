import { FC, useCallback, useState } from 'react'

import { FiPlus } from 'react-icons/fi'

import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'

import { Modal } from '@/shared/ui/modal/Modal'
import { CreateGame, FetchAdminGameList } from '@/features/gameInteraction'

import styles from './AdminGamesPage.module.scss'

const AdminGamesPage: FC = () => {
	const [modalActive, setModalActive] = useState(false)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [modalActive])

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
						<FetchAdminGameList />
						<Modal isOpen={modalActive} onClose={onModalClose}>
							<CreateGame onClose={onModalClose} />
						</Modal>
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
}

export default AdminGamesPage
