import { FC, memo, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './GenreFilter.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { IFeature } from '../../../../models/IFeature'
import { IGenre } from '../../../../models/IGenre'
import { propertiesApi } from '../../../../store/api/properties.api'
import { findSelectedFilterId } from '@/shared/lib'

interface IFilterProps {
	type: 'genres' | 'features'
	selectedFilters: any
	setSelectedFilters: any
}

const Filter: FC<IFilterProps> = memo(
	({ type, selectedFilters, setSelectedFilters }) => {
		const [showFilters, setShowFilters] = useState(true)
		const [filters, setFilters] = useState<IGenre[] | IFeature[]>([])

		if (type === 'genres') {
			const { data } = propertiesApi.useFetchGenresQuery()
			setFilters(data as IGenre[])
		}

		if (type === 'features') {
			const { data } = propertiesApi.useFetchFeaturesQuery()
			setFilters(data as IFeature[])
		}

		const genreClickHandler = (filter: any) => {
			if (filter.id === findSelectedFilterId(filter.id, selectedFilters)) {
				setSelectedFilters([
					...selectedFilters.filter((f: any) => f.id !== filter.id),
				])
			} else {
				setSelectedFilters([...selectedFilters, filter])
			}
		}

		return (
			<div className={styles.filter}>
				<button
					onClick={() => setShowFilters(!showFilters)}
					className={styles.main_btn}
				>
					<h3>genres</h3>
					<IoIosArrowDown
						className={cn(styles.arrow_icon, {
							[styles.clicked]: showFilters,
						})}
					/>
				</button>
				<CSSTransition
					in={showFilters}
					timeout={250}
					classNames={{
						enter: styles.show_filters_enter,
						enterActive: styles.show_filters_enter_active,
						exit: styles.show_filters_exit,
						exitActive: styles.show_filters_exit_active,
					}}
					unmountOnExit
				>
					<ul className={styles.filters_list}>
						{filters?.map(filter => (
							<li
								onClick={() => genreClickHandler(filter)}
								key={filter.id}
								className={cn(styles.filter, {
									[styles.active_filter]:
										filter.id ===
										findSelectedFilterId(filter.id, selectedFilters),
								})}
							>
								<p>
									{type === 'genres'
										? (filter as IGenre).genreName
										: (filter as IFeature).featureName}
								</p>
							</li>
						))}
					</ul>
				</CSSTransition>
			</div>
		)
	},
)

export default Filter
