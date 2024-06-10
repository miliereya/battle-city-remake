import { Game } from '@/engine'
import { Players } from './players/players'
import {
	Bangs,
	GameOverAnimation,
	LevelChangeAnimation,
	Pause,
} from './animations'
import { Flag, Objects } from './objects'
import { useAudio, usePixel } from '@/hooks'
import { Bullets } from './bullets/bullets'
import { Enemies } from './enemies'
import { Bonuses } from './bonuses/bonuses'
import { Sidebar } from './sidebar'

interface Props {
	game: Game
}

export const GameRender = ({ game }: Props) => {
	const pixel = usePixel()

	useAudio(
		game.sounds,
		game.settings,
		game?.sounds.player_move,
		game?.sounds.enemy_move
	)

	return (
		<>
			<div
				style={{
					width: `${pixel * 13 * 16}px`,
					height: `${pixel * 13 * 16}px`,
				}}
				className="game"
			>
				{game.levelChangeAnimation && (
					<LevelChangeAnimation level={game.level} />
				)}
				{game.gameOverAnimation && <GameOverAnimation />}
				{game.isPaused && <Pause />}
				<Players p1={game.p1} p2={game.p2} />
				<Objects objects={game.objects} />
				<Bullets bullets={game.bullets} />
				<Enemies enemies={game.enemies} />
				<Bonuses bonuses={game.bonuses} />
				<Bangs bangs={game.bangs} />
				<Flag pixel={pixel} isAlive={game.isFlagAlive} />
				<Sidebar game={game} />
			</div>
		</>
	)
}
