import { useEffect } from 'react'
import { useMobile } from './useMobile'

export const useEditorKeys = (chooseHandler: (code: string) => void) => {
	const isMobile = useMobile()
	const createClickHandler = (keyCode: string) => () => chooseHandler(keyCode)

	const eventListeners = [
		{ id: 'space', handler: createClickHandler('KeyF') },
		{ id: 'fire1', handler: createClickHandler('Space') },
		{ id: 'top1', handler: createClickHandler('KeyW') },
		{ id: 'right1', handler: createClickHandler('KeyD') },
		{ id: 'left1', handler: createClickHandler('KeyA') },
		{ id: 'right2', handler: createClickHandler('KeyD') },
		{ id: 'left2', handler: createClickHandler('KeyA') },
		{ id: 'bottom1', handler: createClickHandler('KeyS') },
		{ id: 'fire2', handler: createClickHandler('Space') },
		{ id: 'top2', handler: createClickHandler('KeyW') },
		{ id: 'bottom2', handler: createClickHandler('KeyS') },
	]

	useEffect(() => {
		const chooseHandlerListener = (e: KeyboardEvent) =>
			chooseHandler(e.code)

		if (isMobile) {
			eventListeners.forEach(({ id, handler }) => {
				document.getElementById(id)?.addEventListener('click', handler)
			})

			return () => {
				eventListeners.forEach(({ id, handler }) => {
					document
						.getElementById(id)
						?.removeEventListener('click', handler)
				})
			}
		} else {
			document.addEventListener('keypress', chooseHandlerListener)

			return () => {
				document.removeEventListener('keypress', chooseHandlerListener)
			}
		}
	}, [chooseHandler, isMobile])
}
