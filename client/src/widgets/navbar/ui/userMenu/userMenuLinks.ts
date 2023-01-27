import { ADMIN_ROUTE, STORE_ROUTE } from '@/shared/consts'
import { DropdownLink } from '@/shared/ui/dropdown/Dropdown'

export const userMenuLinks: DropdownLink[] = [
	{
		href: ADMIN_ROUTE,
		title: 'Admin Panel',
		adminOnly: true,
	},
	{
		href: STORE_ROUTE,
		title: 'Log Out',
		adminOnly: false,
	},
]
