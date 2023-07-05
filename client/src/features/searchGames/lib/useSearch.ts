import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchGames } from '../api/searchGamesApi'
import { useDebounce } from '@/shared/lib/hooks'

export function useSearch(initialValue?: string) {
	const [isVisible, setVisible] = useState(false)
	const [searchTerm, setSearchTerm] = useState(initialValue ?? '')
	const debounceSearch = useDebounce(searchTerm, 1000)

	const { data, isSuccess } = useSearchGames(debounceSearch, {
		skip: !debounceSearch,
	})

	useEffect(() => {
		if (isSuccess) {
			setVisible(true)
		}
	}, [isSuccess])

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const hide = () => {
		setVisible(false)
	}

	return {
		handleSearch,
		hide,
		games: data,
		searchTerm,
		isVisible,
	}
}
