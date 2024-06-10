import { Tank } from './tank.instance'

export class Player extends Tank {
	// Helmet frames
	helmet = 120

	num: 1 | 2

	constructor(
		side: 'left' | 'right',
		id: string,
		playerLevel: 0 | 1 | 2 | 3,
		isHardcore: boolean
	) {
		super(side, `LVL_${playerLevel}`, id, undefined, isHardcore)
		this.num = side === 'left' ? 1 : 2
	}

	reset() {
		this.deathCooldown = 0
		this.spawnAnimation = 50
		this.helmet = 120
		this.coordinateX = this.num === 1 ? 71 : 136
		this.coordinateY = 7

		if (this.type === 'LVL_2') {
			this.availableBullets = 2
		} else if (this.type === 'LVL_3') {
			this.availableBullets = 3
		} else {
			this.availableBullets = 1
		}
	}

	respawn() {
		this.type = 'LVL_0'
		this.direction = 'TOP'
		this.availableBullets = 1
		this.spawnAnimation = 50
		this.helmet = 120
		this.coordinateX = this.num === 1 ? 71 : 136
		this.coordinateY = 7
	}
}
