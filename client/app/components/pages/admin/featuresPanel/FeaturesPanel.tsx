import { FC, useEffect, useState } from 'react'
import styles from './FeaturesPanel.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import GameService from '../../../../services/game.service'
import { setFeatures } from '../../../../store/reducers/gameReducer/GameSlice'
import { deleteFeature } from '../../../../store/reducers/gameReducer/gameAC'
import { FiPlus } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import FeatureModal from './FeatureModal/FeatureModal'

const FeaturesPanel: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		GameService.fetchFeatures().then((data) => dispatch(setFeatures(data)))
	}, [])
	const { features } = useAppSelector((state) => state.game)
	const deleteHandler = (featureId: number) => {
		dispatch(deleteFeature(featureId))
	}
	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.add_feature}>
					<FiPlus onClick={() => setModalActive(true)} />
					<FeatureModal active={modalActive} setActive={setModalActive} />
				</div>
				<div className={styles.featureList}>
					<h3>Features</h3>
					{features.map((feature) => (
						<div key={feature.id} className={styles.feature}>
							<p>{feature.featureName}</p>
							<ImCross onClick={() => deleteHandler(feature.id)} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturesPanel
