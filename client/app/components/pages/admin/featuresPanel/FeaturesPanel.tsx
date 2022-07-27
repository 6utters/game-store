import { FC, useState } from 'react'
import styles from './FeaturesPanel.module.scss'
import { FiPlus } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import FeatureModal from './FeatureModal/FeatureModal'
import { propertiesApi } from '../../../../store/api/properties.api'
import Spinner from '../../../ui/Spinner/Spinner'

const FeaturesPanel: FC = () => {
	const { data: features, isLoading } = propertiesApi.useFetchFeaturesQuery()
	const [deleteFeature] = propertiesApi.useDeleteFeatureMutation()

	const deleteHandler = (featureId: number) => {
		deleteFeature(featureId)
	}
	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			{isLoading ? (
				<Spinner />
			) : (
				<div className={styles.content}>
					<div className={styles.add_feature}>
						<FiPlus onClick={() => setModalActive(true)} />
						<FeatureModal active={modalActive} setActive={setModalActive} />
					</div>
					<div className={styles.featureList}>
						<h3>Features</h3>
						{features?.map((feature) => (
							<div key={feature.id} className={styles.feature}>
								<p>{feature.featureName}</p>
								<ImCross onClick={() => deleteHandler(feature.id)} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default FeaturesPanel
