interface IFilters {
	id: number
	gameTheme?: string
	gameGenre?: string
}

export const findSelectedFilter = (searchedId: number, filters: IFilters[]) => {
	const searchedFilter = filters.find((filter) => filter.id === searchedId)
	if (searchedFilter) {
		return searchedFilter.id
	}
}
