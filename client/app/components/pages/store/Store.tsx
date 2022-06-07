import { FC } from 'react'
import styles from './Store.module.scss'
import Navbar from './navbar/Navbar'

const Store: FC = () => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>content</div>
			</div>
		</>
	)
}

export default Store
