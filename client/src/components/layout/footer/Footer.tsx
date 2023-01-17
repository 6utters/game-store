import styles from './Footer.module.scss'
import { FC } from 'react'
import { GrFacebook, GrTwitter, GrYoutube } from 'react-icons/gr'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { resourceLinks } from './footer.links'
import Link from 'next/link'
import Image from 'next/image'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import { STORE_ROUTE } from '@/shared/consts'

const Footer: FC = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_nav}>
				<div className={styles.footer_nav_links}>
					<button>
						<GrFacebook />
					</button>
					<button>
						<GrTwitter />
					</button>
					<button>
						<GrYoutube />
					</button>
				</div>
				<div className={styles.footer_nav_arrow}>
					<button>
						<BsFillArrowUpSquareFill onClick={goToTop} />
					</button>
				</div>
			</div>
			<div className={styles.resources}>
				<p>Resources</p>
				<div className={styles.resources_links}>
					{resourceLinks.map(link => (
						<Link href={link.href} key={link.id}>
							<a>{link.title}</a>
						</Link>
					))}
				</div>
			</div>
			<p>
				© 2022, D&D Games, Inc. All rights reserved. D&D, D&D Games, the D&D
				Games logo are trademarks or registered trademarks of D&D Games, Inc. in
				the United States of America and elsewhere. Other brands or product
				names are the trademarks of their respective owners. Non-US transactions
				through D&D Games International, S.à r.l.{' '}
			</p>
			<div className={styles.links}>
				<div className={styles.left_side}>
					<button>Terms of Service</button>
					<button>Privacy Policy</button>
					<button>Store Refund Policy</button>
				</div>
				<Link href={STORE_ROUTE}>
					<a>
						<Image src={logoSvg} height={25} width={25} />
					</a>
				</Link>
			</div>
		</footer>
	)
}

export default Footer
