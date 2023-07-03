import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import logoSvg from '@/shared/assets/svgs/sword-svgrepo-com.svg'
import { STORE_ROUTE } from '@/shared/consts'

import styles from './Logo.module.scss'

interface LogoProps {
	size: number
	textSize?: number
	className?: string
}

export const Logo: FC<LogoProps> = ({ size, className, textSize }) => (
	<Link href={STORE_ROUTE} className={cn(styles.logo, className)}>
		<Image src={logoSvg} height={size} width={size} alt={'appLogo'} />
		<h2 style={{ fontSize: `${textSize}rem` }}>
			<span>D</span>&<span>D</span> Games
		</h2>
	</Link>
)
