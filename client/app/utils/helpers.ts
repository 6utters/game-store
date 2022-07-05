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

export const convertImage = (image: string) => {
	if (image.slice(0, 1) === '/') {
		return image
	} else {
		return `/${image}`
	}
}
