import { ChangeEvent, useState } from 'react'
import { useDebounce } from '../../../../../hooks/useDebounce'
import { useQuery } from 'react-query'
import GameService from '../../../../../services/game.service'
import { useOutside } from '../../../../../hooks/useOutside'

export const useSearch = () => {
	const visible = useOutside(false)
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search games', debounceSearch],
		() => GameService.fetchBySearchGames(searchTerm),
		{
			select: (data) => data.slice(0, 5),
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
