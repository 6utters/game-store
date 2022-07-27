import { FC } from 'react'
import styles from './GameImages.module.scss'
import { IGameMedia } from '../../../../../models/IGameMedia'

const GameImages: FC<{ images: IGameMedia[] | undefined }> = ({ images }) => {
	return (
		<>
			{images && (
				<div className={styles.images}>
					<div className={styles.one_image}>
						<img
							src={`http://localhost:5000${images[0].url}`}
							alt='first image'
						/>
					</div>
					<div className={styles.two_images}>
						<img
							src={`http://localhost:5000${images[1].url}`}
							alt='first image'
						/>
						<img
							src={`http://localhost:5000${images[2].url}`}
							alt='first image'
						/>
					</div>
					<div className={styles.one_image}>
						<img
							src={`http://localhost:5000${images[3].url}`}
							alt='first image'
						/>
					</div>
					<div className={styles.two_images}>
						<img
							src={`http://localhost:5000${images[4].url}`}
							alt='first image'
						/>
						<img
							src={`http://localhost:5000${images[5].url}`}
							alt='first image'
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default GameImages
