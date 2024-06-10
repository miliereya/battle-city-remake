export type TypeMoveButton = 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT'
export type TypeActionButton = 'FIRE' | 'PAUSE'

export type TypeButton = TypeMoveButton | TypeActionButton

export type TypeEditorChoose = TypeGameObjet | 'DELETE'

export type TypeGameObjet = 'STONE' | 'BRICK' | 'WATER' | 'TREES' | 'ICE'

export type TypeEnemyTank = 'NORMAL' | 'SPEEDY' | 'HEAVY'

export type TypePlayerLevel = 0 | 1 | 2 | 3

interface Coordinates {
	coordinateX: number
	coordinateY: number
}

export interface GameSounds {
	heavy_hit: boolean
	pause: boolean
	level_start: boolean
	bang: boolean
	flag_bang: boolean
	game_over: boolean
	shoot: boolean
	hit_1: boolean
	bonus_spawn: boolean
	bonus_pickup: boolean
	player_move: boolean
	enemy_move: boolean
}

export interface CreateGameObject extends Coordinates {
	type: TypeGameObjet
	id: string
}
