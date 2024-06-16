import { Game } from '@/engine'
import { TypeButton, TypeMoveButton } from '@/types'
import { useEffect, useState } from 'react'
import { useFrameLoop } from './useFrameLoop'
import { useMobile } from './useMobile'
import { gameApi } from '@/api'

const movementMap: Record<string, TypeMoveButton> = {
	KeyW: 'TOP',
	KeyD: 'RIGHT',
	KeyA: 'LEFT',
	KeyS: 'BOTTOM',
}

export const useOnlineControls = (game?: Game) => {
	const isMobile = useMobile()

	const [movement, setMovement] = useState<TypeMoveButton | null>(null)

	let moveTimer: NodeJS.Timeout

	const moveMobileHandler = (button: TypeMoveButton) => {
		moveTimer = setInterval(() => inputHandler(button), 10)
	}

	const clearMoveMobileHandler = () => {
		clearInterval(moveTimer)
		setMovement(null)
	}

	const inputHandler = (button: TypeButton | null) => {
		if (!game || !button) return

		gameApi.input(button, game.id)
	}

	useFrameLoop(() => {
		if (movement) inputHandler(movement)
	})

	useEffect(() => {
		if (!game) return

		const moveHandler = (e: KeyboardEvent) => {
			const val = movementMap[e.code]
			if (['KeyW', 'KeyD', 'KeyA', 'KeyS'].includes(e.code))
				setMovement(val)
		}

		const fireHandler = (e: KeyboardEvent) => {
			if (e.code === 'KeyF') inputHandler('FIRE')
		}

		const pauseHandler = (e: KeyboardEvent) => {
			if (e.code === 'Space') inputHandler('PAUSE')
		}

		const clearMovement = (e: KeyboardEvent) => {
			if (['KeyW', 'KeyD', 'KeyA', 'KeyS'].includes(e.code))
				setMovement(null)
		}

		const mobileHandlers = [
			{
				id: 'space',
				event: 'click',
				handler: () => inputHandler('PAUSE'),
			},

			{
				id: 'fire1',
				event: 'click',
				handler: () => inputHandler('FIRE'),
			},

			{
				id: 'top1',
				event: 'touchstart',
				handler: () => moveMobileHandler('TOP'),
			},
			{
				id: 'bottom1',
				event: 'touchstart',
				handler: () => moveMobileHandler('BOTTOM'),
			},
			{
				id: 'left1',
				event: 'touchstart',
				handler: () => moveMobileHandler('LEFT'),
			},
			{
				id: 'right1',
				event: 'touchstart',
				handler: () => moveMobileHandler('RIGHT'),
			},

			{
				id: 'top1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(),
			},
			{
				id: 'bottom1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(),
			},
			{
				id: 'left1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(),
			},
			{
				id: 'right1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(),
			},
		]

		if (isMobile) {
			mobileHandlers.forEach(({ id, event, handler }) => {
				document.getElementById(id)?.addEventListener(event, handler)
			})
			return () => {
				if (isMobile) {
					mobileHandlers.forEach(({ id, event, handler }) => {
						document
							.getElementById(id)
							?.removeEventListener(event, handler)
					})
				}
			}
		} else {
			document.addEventListener('keypress', moveHandler)
			document.addEventListener('keyup', clearMovement)
			document.addEventListener('keypress', fireHandler)
			document.addEventListener('keypress', pauseHandler)

			return () => {
				document.removeEventListener('keypress', moveHandler)
				document.removeEventListener('keyup', clearMovement)
				document.removeEventListener('keypress', fireHandler)
				document.removeEventListener('keypress', pauseHandler)
			}
		}
	}, [game, isMobile])
}
