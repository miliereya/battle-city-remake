import { v4 as uuid4 } from 'uuid'
import { TypeGameBLock } from '../types'
import { Coordinates } from './coordinates.instance'

export class GameObject extends Coordinates {
	id: string
	type: TypeGameBLock

	constructor(type: TypeGameBLock, x: number, y: number) {
		super(x * 8, y * 8)
		this.id = uuid4()
		this.type = type
	}
}
