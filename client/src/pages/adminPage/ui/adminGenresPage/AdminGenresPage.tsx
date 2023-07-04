import { FC, memo, useCallback, useState } from 'react'

import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'

import { FiPlus } from 'react-icons/fi'

import { AdminGenresPageModal } from './adminGenresPageModal/AdminGenresPageModal'
import { FetchGenreList } from '@/features/genreInteraction'

import styles from './AdminGenresPage.module.scss'

const GenresPanel: FC = memo(() => {
	const [modalActive, setModalActive] = useState(false)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [])

	return (
		<MainLayout
			withNavbar={true}
			title={'D&D Games | AdminPage panel | Genres Panel'}
			withFooter={false}
		>
			<AdminLayout>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.addNewGenreButton}>
							<FiPlus onClick={() => setModalActive(true)} />
						</div>
						<FetchGenreList />
						<AdminGenresPageModal isOpen={modalActive} onClose={onModalClose} />
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
})

export default GenresPanel
