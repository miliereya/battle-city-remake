import { Pixel } from '@/types'
import { useState, useEffect } from 'react'

export const usePixel = () => {
	const [pixel, setPixel] = useState<Pixel>(4)

	useEffect(() => {
		const handleWindowResize = () => {
			const w = window.innerWidth
			const h = window.innerHeight
			if (w > 1090 && h > 980) {
				setPixel(4.5)
			} else if (w > 950 && h > 870) {
				setPixel(4)
			} else if (w > 845 && h > 765) {
				setPixel(3.5)
			} else if (w > 750 && h > 660) {
				setPixel(3)
			} else if (w > 610 && h > 550) {
				setPixel(2.5)
			} else if (w > 500 && h > 460) {
				setPixel(2)
			} else if (w > 360 && h > 340) {
				setPixel(1.5)
			} else {
				setPixel(1)
			}
		}
		handleWindowResize()
		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return pixel
}
