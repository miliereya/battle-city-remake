import { useOnlineControls, useFrameLoop, useGame } from '@/hooks'
import { useState } from 'react'
import { GameRender } from './game'

export const SetupOnline = () => {
	const [frame, setFrame] = useState(0)
	const { game } = useGame()

	useOnlineControls(game)

	useFrameLoop(() => {
		if (game && game.frame !== frame) {
			setFrame(game.frame)
		}
	})

	if (!game) return

	return <GameRender game={game} />
}
