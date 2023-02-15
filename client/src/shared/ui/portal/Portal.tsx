import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


interface PortalProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
	children: ReactNode
	element?: HTMLElement;
}

const Portal: FC<PortalProps> = ({element = document.body.querySelector('#mainApp')!, children}) => {
	return createPortal(children, element)
}

export default Portal


