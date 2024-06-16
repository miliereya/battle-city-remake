import { Game } from '../instances'

export const levelFrameLogic = (game: Game) => {
	const {
		levelChangeAnimation,
		levelEndDelay,
		enemies,
		enemyList,
		gameOverAnimation,
	} = game

	if (levelChangeAnimation === 60) {
		game.nextLevel()
	}

	if (levelChangeAnimation) game.levelChangeAnimation--

	if (levelEndDelay === 1) {
		game.level++
		game.levelChangeAnimation = 110
	}

	if (levelEndDelay) game.levelEndDelay--

	if (
		enemies.length === 0 &&
		enemyList.length === 0 &&
		!gameOverAnimation &&
		!levelEndDelay &&
		!levelChangeAnimation
	) {
		game.levelEndDelay = 100
	}
}
