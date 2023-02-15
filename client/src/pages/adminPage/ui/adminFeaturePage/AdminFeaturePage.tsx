import { FC, memo, useCallback, useState } from 'react'

import { FiPlus } from 'react-icons/fi'

import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

import { FetchFeatureList } from '@/features/featureInteraction'
import {
	AdminFeaturePageModal,
} from './adminFeaturePageModal/AdminFeaturePageModal'

import styles from './AdminFeaturePage.module.scss'


const AdminFeaturePage: FC = memo(() => {
	const [modalActive, setModalActive] = useState<boolean>(false)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [modalActive])

	return (
		<Layout
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
						<AdminFeaturePageModal isOpen={modalActive} onClose={onModalClose} />
					</div>
				</div>
			</AdminLayout>
		</Layout>
	)
})

export default AdminFeaturePage
