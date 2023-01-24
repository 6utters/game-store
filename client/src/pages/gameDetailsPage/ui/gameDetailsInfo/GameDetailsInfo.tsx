import { FC, memo, useMemo } from 'react'
import { Feature, GameAbout, Genre } from '@/entities/Game'
import styles from './GameDetailsInfo.module.scss'

interface GameDetailsInfoProps {
	aboutInfo: GameAbout
	gameGenres: Genre[]
	gameFeatures: Feature[]
	gameName: string
}

export const GameDetailsInfo: FC<GameDetailsInfoProps> = memo(props => {
	const { aboutInfo, gameGenres, gameFeatures, gameName } = props

	const aboutInfoParagraphs = useMemo(() => {
		const { gameId, id, mainInfo, createdAt, updatedAt, ...paragraphs } =
			aboutInfo
		return Object.values(paragraphs).map((paragraph, index) => {
			return <p key={paragraph + index}>{paragraph}</p>
		})
	}, [aboutInfo])

	// const dispatch = useAppDispatch()
	// const router = useRouter()
	// const filterHandler = (filterMenu: any, type: string) => {
	// 	if (type === 'genre') {
	// 		dispatch(setSelectedGenres(filterMenu))
	// 		router.push('/')
	// 	}
	// 	if (type === 'feature') {
	// 		dispatch(setSelectedFeatures(filterMenu))
	// 		router.push('/')
	// 	}
	// }

	return (
		<div className={styles.container}>
			<div className={styles.main_info}>
				<p>{aboutInfo.mainInfo}</p>
			</div>
			<div className={styles.genres_filters}>
				<div className={styles.genre_card}>
					<p>Genres</p>
					<div className={styles.genres}>
						{/*{gameGenres.map(g => (*/}
						{/*	<h5*/}
						{/*	onClick={() => filterHandler(g, 'genre')} key={g.id}*/}
						{/*	>*/}
						{/*		{g.genreName}*/}
						{/*	</h5>*/}
						{/*))}*/}
					</div>
				</div>
				<div className={styles.feature_card}>
					<p>Features</p>
					<div className={styles.features}>
						{/*{gameFeatures.map(f => (*/}
						{/*	<h5*/}
						{/*	onClick={() => filterHandler(f, 'feature')} key={f.id}*/}
						{/*	>*/}
						{/*		{f.featureName}*/}
						{/*	</h5>*/}
						{/*))}*/}
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
				{aboutInfoParagraphs}
				{/*{aboutInfo.fstP && <p>{aboutInfo.fstP}</p>}*/}
				{/*{aboutInfo.sndP && <p>{aboutInfo.sndP}</p>}*/}
				{/*{aboutInfo.thdP && <p>{aboutInfo.thdP}</p>}*/}
				{/*{aboutInfo.ftsP && <p>{aboutInfo.ftsP}</p>}*/}
				{/*{aboutInfo.thsP && <p>{aboutInfo.thsP}</p>}*/}
			</div>
		</div>
	)
})
