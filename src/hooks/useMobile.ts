import { useEffect, useState } from 'react'

export const useMobile = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange)
		setWidth(window.innerWidth)
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange)
		}
	}, [])

	return width <= 768 || height <= 768
}
