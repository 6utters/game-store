import { STORE_ROUTE } from '@/shared/consts'

interface Resource {
	id: number
	href: string
	title: string
}

export const resourceLinks: Resource[] = [
	{ id: 1, href: STORE_ROUTE, title: 'Support-A-Creator' },
	{ id: 2, href: STORE_ROUTE, title: 'Fan Art Policy' },
	{ id: 3, href: STORE_ROUTE, title: 'Online Services' },
	{ id: 4, href: STORE_ROUTE, title: 'Publish on Epic Games' },
	{ id: 5, href: STORE_ROUTE, title: 'UX Research' },
	{ id: 6, href: STORE_ROUTE, title: 'Community Rules' },
	{ id: 7, href: STORE_ROUTE, title: 'Careers' },
	{ id: 8, href: STORE_ROUTE, title: 'StorePage EULA' },
	{ id: 9, href: STORE_ROUTE, title: 'D&D Newsroom' },
	{ id: 10, href: STORE_ROUTE, title: 'Company' },
]