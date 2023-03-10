import { FC, memo, useCallback, useState } from 'react'

import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

import { FiPlus } from 'react-icons/fi'

import { AdminGenresPageModal } from './adminGenresPageModal/AdminGenresPageModal'
import { FetchGenreList } from '@/features/genreInteraction'

import styles from './AdminGenresPage.module.scss'


const GenresPanel: FC = memo(() => {
	const [modalActive, setModalActive] = useState(false)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [modalActive])

	return (
		<Layout
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
						<FetchGenreList/>
						<AdminGenresPageModal isOpen={modalActive} onClose={onModalClose} />
					</div>
				</div>
			</AdminLayout>
		</Layout>
	)
})

export default GenresPanel
