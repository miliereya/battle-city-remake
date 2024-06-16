import { useControls, useFrameLoop, useGame } from '@/hooks'
import { useState } from 'react'
import { GameRender } from './game'

export const SetupLocal = () => {
	const [frame, setFrame] = useState(0)
	const { game } = useGame()

	useControls(game)

	useFrameLoop(() => {
		if (game && game.frame !== frame) {
			setFrame(game.frame)
		}
	})

	if (!game) return

	return <GameRender game={game} />
}
