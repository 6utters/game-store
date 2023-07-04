import { BsHdd } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'
import { FEATURES_PANEL, GAMES_PANEL, GENRES_PANEL } from '@/shared/consts'
import { IconType } from 'react-icons'

interface AdminLayoutLink {
	id: number
	title: string
	href: string
	icon: IconType
}

export const adminLayoutLinks: AdminLayoutLink[] = [
	{ id: 1, title: 'Genres Panel', href: GENRES_PANEL, icon: BsHdd },
	{ id: 2, title: 'Features Panel', href: FEATURES_PANEL, icon: BsHdd },
	{
		id: 3,
		title: 'Games Panel',
		href: GAMES_PANEL,
		icon: GiGamepad,
	},
]
