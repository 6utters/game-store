import {
	FEATURES_PANEL,
	GAMES_PANEL,
	GENRES_PANEL,
} from '../../../../utils/constants'
import { BsHdd } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'

interface ISidebarAdminLinks {
	id: number
	title: string
	href: string
	icon: any
}

export const sidebarAdminLinks: ISidebarAdminLinks[] = [
	{ id: 1, title: 'Genres Panel', href: GENRES_PANEL, icon: BsHdd },
	{ id: 2, title: 'Features Panel', href: FEATURES_PANEL, icon: BsHdd },
	{
		id: 3,
		title: 'Games Panel',
		href: GAMES_PANEL,
		icon: GiGamepad,
	},
]
