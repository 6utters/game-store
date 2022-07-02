import { FC } from 'react'
import { IGameAbout } from '../../../../../models/IGameAbout'
import styles from './AboutGameInfo.module.scss'
import { IGenre } from '../../../../../models/IGenre'
import { IFeature } from '../../../../../models/IFeature'

interface IAboutGameInfoProps {
	aboutInfo: IGameAbout
	gameGenres: IGenre[]
	gameFeatures: IFeature[]
	gameName: string
}

const AboutGameInfo: FC<IAboutGameInfoProps> = ({
	aboutInfo,
	gameGenres,
	gameFeatures,
	gameName,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.main_info}>
				<p>{aboutInfo.mainInfo}</p>
			</div>
			<div className={styles.genres_filters}>
				<div className={styles.genre_card}>
					<p>Genres</p>
					<div className={styles.genres}>
						{gameGenres.map((g) => (
							<h5 key={g.id}>{g.genreName}</h5>
						))}
					</div>
				</div>
				<div className={styles.feature_card}>
					<p>Features</p>
					<div className={styles.features}>
						{gameFeatures.map((f) => (
							<h5 key={f.id}>{f.featureName}</h5>
						))}
					</div>
				</div>
			</div>
			<div className={styles.about}>
				<div className={styles.game_name}>
					<p>{gameName}</p>
				</div>
				<div className={styles.game_about}>
					<p>About</p>
				</div>
				{aboutInfo.fstP && <p>{aboutInfo.fstP}</p>}
				{aboutInfo.sndP && <p>{aboutInfo.sndP}</p>}
				{aboutInfo.thdP && <p>{aboutInfo.thdP}</p>}
				{aboutInfo.ftsP && <p>{aboutInfo.ftsP}</p>}
				{aboutInfo.thsP && <p>{aboutInfo.thsP}</p>}
			</div>
		</div>
	)
}

export default AboutGameInfo
