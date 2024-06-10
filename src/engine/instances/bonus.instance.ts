import { Player } from '.'
import { TypeBonus } from '../types'
import { generateBonusCoordinates } from '../utils'
import { Coordinates } from './coordinates.instance'
import { v4 as uuid4 } from 'uuid'

export class Bonus extends Coordinates {
	id: string
	type: TypeBonus
	lifeTime = 300
	constructor(type: TypeBonus) {
		const { x, y } = generateBonusCoordinates()
		super(x, y)

		this.id = uuid4()
		this.type = type
	}

	isAnyPlayerTouched(p1: Player, p2: Player | null) {
		const isPlayerTouched = (player: Player): boolean => {
			return (
				player.coordinateX + 7 >= this.coordinateX &&
				player.coordinateX <= this.coordinateX + 22 &&
				player.coordinateY + 7 >= this.coordinateY &&
				player.coordinateY <= this.coordinateY + 21
			)
		}

		if (isPlayerTouched(p1)) {
			return p1
		}

		if (p2 && isPlayerTouched(p2)) {
			return p2
		}

		return null
	}
}
