export interface GameSettings {
	hardcore: boolean
	playerLevel: 0 | 1 | 2 | 3
	friendlyFire: boolean
	soundPack: 'default' | 'mario'
}

export type TypeSimpleSound =
	| 'bang'
	| 'bonus_pickup'
	| 'bonus_spawn'
	| 'flag_bang'
	| 'game_over'
	| 'heavy_hit'
	| 'hit_1'
	| 'level_start'
	| 'pause'
	| 'shoot'

export type TypeSound = 'player_move' | 'enemy_move' | TypeSimpleSound
