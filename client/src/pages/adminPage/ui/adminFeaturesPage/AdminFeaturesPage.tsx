import { FC, memo, useCallback, useState } from 'react'

import { FiPlus } from 'react-icons/fi'

import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'

import { FetchFeatureList } from '@/features/featureInteraction'
import { AdminFeaturesPageModal } from './adminFeaturesPageModal/AdminFeaturesPageModal'

import styles from './AdminFeaturesPage.module.scss'

const AdminFeaturesPage: FC = memo(() => {
	const [modalActive, setModalActive] = useState<boolean>(false)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [modalActive])

	return (
		<MainLayout
			withNavbar={true}
			title={'D&D Games | AdminPage panel | Features Panel'}
			withFooter={false}
		>
			<AdminLayout>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.addFeatureButton}>
							<FiPlus onClick={() => setModalActive(true)} />
						</div>
						<FetchFeatureList />
						<AdminFeaturesPageModal
							isOpen={modalActive}
							onClose={onModalClose}
						/>
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
})

export default AdminFeaturesPage
