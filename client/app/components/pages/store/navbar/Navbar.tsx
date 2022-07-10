import { FC, useEffect } from 'react'
import styles from './Navbar.module.scss'
import Search from './Search/Search'
import Link from 'next/link'
import { BASKET_ROUTE } from '../../../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { IGame } from '../../../../models/IGame'
import { fetchCartGames } from '../../../../store/reducers/cartReducer/cartAC'

const Navbar: FC = () => {
	const dispatch = useAppDispatch()
	const { cartGames } = useAppSelector((state) => state.cart)

	useEffect(() => {
		dispatch(fetchCartGames())
	}, [])

	//TODO: realize through redux toolkit
	const showCount = (cartGames: IGame[]) => {
		return cartGames.length ? cartGames.length : ''
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__content}>
				<div className={styles.navbar__left}>
					<Search />
					<div className={styles.navbar__links}>
						<Link href={'/'}>
							<a>Discover</a>
						</Link>
						<Link href={'/'}>
							<a className={styles.activeLink}>Browse</a>
						</Link>
					</div>
				</div>
				<div className={styles.navbar__right}>
					<div className={styles.buttons}>
						<button>
							<Link href={BASKET_ROUTE}>
								<a>
									Cart <span>{showCount(cartGames)}</span>
								</a>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
