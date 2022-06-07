import { FC } from 'react'
import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'

const Search: FC = () => {
	return (
		<div className={styles.input}>
			<input type='text' placeholder={'Search'} />
			<BiSearch className={styles.search_icon} />
		</div>
	)
}

export default Search
