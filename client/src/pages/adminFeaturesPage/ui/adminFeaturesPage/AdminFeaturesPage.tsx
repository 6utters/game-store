import { FC, memo, useCallback, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'
import { AdminFeaturesPageModal } from '../adminFeaturesPageModal/AdminFeaturesPageModal'
import {
	FeatureList,
	useDeleteFeature,
	useFetchFeatures,
} from '@/entities/Feature'

import styles from './AdminFeaturesPage.module.scss'

export const AdminFeaturesPage: FC = memo(() => {
	const [modalActive, setModalActive] = useState<boolean>(false)
	const { data: features, isLoading, error } = useFetchFeatures()
	const [deleteFeature] = useDeleteFeature()

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [])

	const deleteHandler = useCallback(
		(featureId: number) => {
			deleteFeature(featureId)
		},
		[deleteFeature],
	)

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
						<FeatureList
							features={features}
							isLoading={isLoading}
							onDelete={deleteHandler}
							error={error}
						/>
						{modalActive && (
							<AdminFeaturesPageModal
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
