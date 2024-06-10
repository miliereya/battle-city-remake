import { TypeDirection } from '.'

type TypeActionButton = 'FIRE' | 'PAUSE'
export type TypeButton = TypeDirection | TypeActionButton

export interface Controls {
	pause: boolean
	fire: boolean
	move: TypeDirection | null
}
