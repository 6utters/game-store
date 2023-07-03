import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { SearchGamesService } from '../services/searchGamesService'
import { useDebounce, useOutside } from '@/shared/lib/hooks'

export const useSearch = () => {
	const visible = useOutside(false)
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search games', debounceSearch],
		() => SearchGamesService.search(searchTerm),
		{
			select: data => data.slice(0, 5),
			enabled: !!debounceSearch,
			onSuccess: () => {
				visible.setIsShown(true)
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return {
		handleSearch,
		isSuccess,
		data,
		searchTerm,
		visible,
	}
}
