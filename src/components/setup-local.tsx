import { useControls, useFrameLoop, useGame } from '@/hooks'
import { useState } from 'react'
import { GameRender } from './game'

export const SetupLocal = () => {
	const [, setFrame] = useState(0)
	const { game } = useGame()

	useControls(game)

	useFrameLoop(() => setFrame((prev) => prev + 1))

	return game && <GameRender game={game} />
}
