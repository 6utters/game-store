import { ChangeEvent, useEffect, useState } from 'react'

import { useSearchGames } from '../services/searchGamesService'
import { useDebounce, useOutside } from '@/shared/lib/hooks'

export const useSearch = () => {
	const visible = useOutside(false)
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 1000)

	const { data, isSuccess } = useSearchGames(debounceSearch, {
		skip: !debounceSearch,
	})

	useEffect(() => {
		if (isSuccess) {
			visible.setIsShown(true)
		}
	}, [isSuccess, visible])

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
