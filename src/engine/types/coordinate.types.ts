import { TypeObject } from '.'

export interface Coordinates {
	coordinateX: number
	coordinateY: number
}

export interface BusyCoordinates extends Coordinates {
	id: string
	type: TypeObject
}

export type TypeDirection = 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT'
export type TypeEnemySpawnPosition = 'middle' | 'left' | 'right'
