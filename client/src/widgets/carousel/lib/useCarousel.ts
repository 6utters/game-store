import { useCallback, useState } from 'react'

interface useCarouselOptions {
	numberOfItems: number
}

export const useCarousel = ({ numberOfItems }: useCarouselOptions) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentThumbRowIndex, setCurrentThumbRowIndex] = useState(0)

	const setIndex = (index: number) => setCurrentIndex(index)

	const handleArrowClick = useCallback(
		(direction: 'next' | 'prev') => {
			const newIndex =
				direction === 'next' ? currentIndex + 1 : currentIndex - 1
			if (newIndex > numberOfItems - 1) return setCurrentIndex(0)
			if (newIndex < 0) return setCurrentIndex(numberOfItems - 1)
			setCurrentIndex(newIndex)
		},
		[currentIndex, numberOfItems],
	)

	const handleThumbArrowClick = useCallback(
		(direction: 'next' | 'prev') => {
			const newThumbListNumber =
				direction === 'next'
					? currentThumbRowIndex + 1
					: currentThumbRowIndex - 1
			if (newThumbListNumber >= numberOfItems / 6)
				return setCurrentThumbRowIndex(0)
			if (newThumbListNumber < 0)
				return setCurrentThumbRowIndex(numberOfItems / 6 - 1)
			setCurrentThumbRowIndex(newThumbListNumber)
		},
		[currentThumbRowIndex, numberOfItems],
	)

	return {
		setIndex,
		currentIndex,
		currentThumbRowIndex,
		handleArrowClick,
		handleThumbArrowClick,
	}
}
