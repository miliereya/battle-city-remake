import { useEffect, useRef } from 'react'

export const useFrameLoop = (callback: () => void) => {
	const rafId = useRef(0)

	useEffect(() => {
		const loop = () => {
			callback()
			rafId.current = requestAnimationFrame(loop)
		}
		rafId.current = requestAnimationFrame(loop)

		return () => cancelAnimationFrame(rafId.current)
	}, [callback])
}
