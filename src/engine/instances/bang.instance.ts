import { TypeBang } from '../types'
import { mutationFilter } from '../utils'
import { Coordinates } from './coordinates.instance'
import { v4 as uuid4 } from 'uuid'

export class Bang extends Coordinates {
	id: string
	type: TypeBang
	timer = 0
	constructor(type: TypeBang, x: number, y: number) {
		super(x, y)

		this.id = uuid4()
		this.type = type
	}

	clear(bangs: Bang[]) {
		mutationFilter(bangs, (b: Bang) => b.id === this.id)
	}
}
