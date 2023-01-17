import { ABOUT_ROUTE, STORE_ROUTE } from '@/shared/consts'

interface navLink {
	id: number
	title: string
	href: string
}

export const navigationLinks: navLink[] = [
	{ id: 1, title: 'store', href: STORE_ROUTE },
	{ id: 2, title: 'about', href: ABOUT_ROUTE },
]
