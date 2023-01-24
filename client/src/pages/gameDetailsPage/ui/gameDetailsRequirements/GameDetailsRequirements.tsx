import { FC, memo } from 'react'
import { GameInfo } from '@/entities/Game'

import styles from './GameDetailsRequirements.module.scss'

interface GameDetailsRequirementsProps {
	gameInfo: GameInfo
}

//todo: try to refactor

export const GameDetailsRequirements: FC<GameDetailsRequirementsProps> = memo(
	({ gameInfo }) => (
		<div className={styles.container}>
			<h3>Specifications</h3>
			<div className={styles.block}>
				<div className={styles.main}>
					<div className={styles.header}>
						<p>windows</p>
					</div>
					<div className={styles.characteristics}>
						<div className={styles.min}>
							<p>Minimum</p>
							<div className={styles.ch_item}>
								<p>OS</p>
								<h5>{gameInfo.os}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Processor</p>
								<h5>{gameInfo.processor}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Memory</p>
								<h5>{gameInfo.memory}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Storage</p>
								<h5>{gameInfo.storage}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Graphics</p>
								<h5>{gameInfo.graphics}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Other</p>
								<h5>Broadband Internet connection</h5>
							</div>
						</div>
						<div className={styles.max}>
							<p>Recommended</p>
							<div className={styles.ch_item}>
								<p>OS</p>
								<h5>{gameInfo.os}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Processor</p>
								<h5>{gameInfo.processor}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Memory</p>
								<h5>{gameInfo.memory}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Storage</p>
								<h5>{gameInfo.storage}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Graphics</p>
								<h5>{gameInfo.graphics}</h5>
							</div>
							<div className={styles.ch_item}>
								<p>Other</p>
								<h5>Broadband Internet connection</h5>
							</div>
						</div>
					</div>
					<div className={styles.logins}>
						<p>Logins</p>
						<h5>Requires D&D Games account</h5>
					</div>
				</div>
				<div className={styles.policy}>
					<p>
						© 2022 Mediatonic Limited. All rights reserved. The Mediatonic logo
						and the Fall Guys mark, logo and characters are trademarks of
						Mediatonic Limited.
					</p>
					<h5>Privacy Policy</h5>
				</div>
			</div>
		</div>
	),
)
