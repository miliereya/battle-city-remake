import { Game } from '@/engine'
import { TypeButton, TypeMoveButton } from '@/types'
import { useEffect, useState } from 'react'
import { useFrameLoop } from './useFrameLoop'
import { useMobile } from './useMobile'
import { TypeDirection } from '@/engine'

const movementMap: Record<string, TypeMoveButton> = {
	KeyW: 'TOP',
	KeyD: 'RIGHT',
	KeyA: 'LEFT',
	KeyS: 'BOTTOM',

	KeyU: 'TOP',
	KeyK: 'RIGHT',
	KeyH: 'LEFT',
	KeyJ: 'BOTTOM',
}

export const useControls = (game?: Game) => {
	const isMobile = useMobile()

	const [movement1, setMovement1] = useState<TypeMoveButton | null>(null)
	const [movement2, setMovement2] = useState<TypeMoveButton | null>(null)

	let move1Timer: NodeJS.Timeout
	let move2Timer: NodeJS.Timeout

	const moveMobileHandler = (p: 1 | 2, button: TypeMoveButton) => {
		if (p === 1) move1Timer = setInterval(() => inputHandler(button, 1), 10)
		else move2Timer = setInterval(() => inputHandler(button, 2), 10)
	}

	const clearMoveMobileHandler = (p: 1 | 2) => {
		clearInterval(p === 1 ? move1Timer : move2Timer)

		p === 1 ? setMovement1(null) : setMovement2(null)
	}

	const inputHandler = (button: TypeButton | null, p: 1 | 2) => {
		if (!game || !button) return

		const controls = p === 1 ? game.p1Controls : game.p2Controls

		if (
			button === 'TOP' ||
			button === 'RIGHT' ||
			button === 'LEFT' ||
			button === 'BOTTOM'
		) {
			controls.move = button as TypeDirection
		} else if (button === 'FIRE') controls.fire = true
		else if (button === 'PAUSE') controls.pause = true
	}

	useFrameLoop(() => {
		if (movement1) inputHandler(movement1, 1)
		if (movement2) inputHandler(movement2, 2)
	})

	useEffect(() => {
		if (!game) return

		const moveHandler = (e: KeyboardEvent) => {
			const val = movementMap[e.code]
			if (['KeyW', 'KeyD', 'KeyA', 'KeyS'].includes(e.code))
				setMovement1(val)
			else if (['KeyU', 'KeyK', 'KeyH', 'KeyJ'].includes(e.code))
				setMovement2(val)
		}

		const fireHandler = (e: KeyboardEvent) => {
			if (e.code === 'KeyF') inputHandler('FIRE', 1)
			else if (e.code === 'KeyL') inputHandler('FIRE', 2)
		}

		const pauseHandler = (e: KeyboardEvent) => {
			if (e.code === 'Space') inputHandler('PAUSE', 1)
		}

		const clearMovement = (e: KeyboardEvent) => {
			if (['KeyW', 'KeyD', 'KeyA', 'KeyS'].includes(e.code))
				setMovement1(null)
			else if (['KeyU', 'KeyK', 'KeyH', 'KeyJ'].includes(e.code))
				setMovement2(null)
		}

		const mobileHandlers = [
			{
				id: 'space',
				event: 'click',
				handler: () => inputHandler('PAUSE', 1),
			},

			{
				id: 'fire1',
				event: 'click',
				handler: () => inputHandler('FIRE', 1),
			},
			{
				id: 'fire2',
				event: 'click',
				handler: () => inputHandler('FIRE', 2),
			},

			{
				id: 'top1',
				event: 'touchstart',
				handler: () => moveMobileHandler(1, 'TOP'),
			},
			{
				id: 'bottom1',
				event: 'touchstart',
				handler: () => moveMobileHandler(1, 'BOTTOM'),
			},
			{
				id: 'left1',
				event: 'touchstart',
				handler: () => moveMobileHandler(1, 'LEFT'),
			},
			{
				id: 'right1',
				event: 'touchstart',
				handler: () => moveMobileHandler(1, 'RIGHT'),
			},

			{
				id: 'top2',
				event: 'touchstart',
				handler: () => moveMobileHandler(2, 'TOP'),
			},
			{
				id: 'bottom2',
				event: 'touchstart',
				handler: () => moveMobileHandler(2, 'BOTTOM'),
			},
			{
				id: 'left2',
				event: 'touchstart',
				handler: () => moveMobileHandler(2, 'LEFT'),
			},
			{
				id: 'right2',
				event: 'touchstart',
				handler: () => moveMobileHandler(2, 'RIGHT'),
			},

			{
				id: 'top1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(1),
			},
			{
				id: 'bottom1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(1),
			},
			{
				id: 'left1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(1),
			},
			{
				id: 'right1',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(1),
			},

			{
				id: 'top2',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(2),
			},
			{
				id: 'bottom2',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(2),
			},
			{
				id: 'left2',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(2),
			},
			{
				id: 'right2',
				event: 'touchend',
				handler: () => clearMoveMobileHandler(2),
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
