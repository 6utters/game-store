import { useState } from 'react'

interface useCarouselOptions {
	numberOfImages: number
}

export const useCarousel = ({ numberOfImages }: useCarouselOptions) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentThumbIndex, setCurrentThumbIndex] = useState(0)

	const setIndex = (index: number) => setCurrentIndex(index)

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
		if (newIndex > numberOfImages - 1) return setCurrentIndex(0)
		if (newIndex < 0) return setCurrentIndex(numberOfImages - 1)
		setCurrentIndex(newIndex)
	}

	const handleThumbArrowClick = (direction: 'next' | 'prev') => {
		const newThumbListNumber =
			direction === 'next' ? currentThumbIndex + 1 : currentThumbIndex - 1
		if (newThumbListNumber >= numberOfImages / 6) return setCurrentThumbIndex(0)
		if (newThumbListNumber < 0)
			return setCurrentThumbIndex(numberOfImages / 6 - 1)
		setCurrentThumbIndex(newThumbListNumber)
	}

	return {
		setIndex,
		currentIndex,
		currentThumbIndex,
		handleArrowClick,
		handleThumbArrowClick,
	}
}
