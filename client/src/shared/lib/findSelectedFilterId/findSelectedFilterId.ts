import { FilterItem } from './FilterItem'

export function findSelectedFilterId(
	searchedId: number,
	filters: FilterItem[],
): number | undefined {
	const searchedFilter = filters.find(filter => filter.id === searchedId)
	if (searchedFilter) {
		return searchedFilter.id
	}
}