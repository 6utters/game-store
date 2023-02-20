import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type typeOut = {
	ref: any
	isShown: boolean
	setIsShown: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisibility: boolean): typeOut => {
	const [isShown, setIsShown] = useState(initialVisibility)
	const ref = useRef<any>()

	const handleClickOutside = (e: any) => {
		if (ref.current && !ref.current.contains(event?.target)) {
			setIsShown(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShown, setIsShown }
}
