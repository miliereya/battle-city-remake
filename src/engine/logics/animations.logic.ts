import { Game } from '../instances'

export const animationsFrameLogic = (game: Game) => {
	const { bangs } = game

	for (let i = 0; i < bangs.length; i++) {
		const bang = bangs[i]
		const { timer, type } = bang

		bang.timer++

		if (
			(type === 'BIG' && timer === 15) ||
			(type === 'SMALL' && timer === 6)
		) {
			bang.clear(bangs)
		}
	}
}
