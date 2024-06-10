import { Game } from '../instances'
import { isGameOver } from '../utils'

export const gameStatusFrameLogic = (game: Game) => {
	const { gameOverAnimation } = game

	if (isGameOver(game)) game.gameOverAnimation = 110

	if (gameOverAnimation === 75) game.sounds.game_over = true

	if (gameOverAnimation === 1) game.isEnded = true

	if (gameOverAnimation) game.gameOverAnimation--
}
