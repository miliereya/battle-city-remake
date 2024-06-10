export type TypeEnemyTank = 'NORMAL' | 'SPEEDY' | 'HEAVY'
export type TypePlayerTank = 'LVL_0' | 'LVL_1' | 'LVL_2' | 'LVL_3'

export type TypeTank = TypeEnemyTank | TypePlayerTank

export type TypeGameBLock =
	| 'STONE'
	| 'BRICK'
	| 'WATER'
	| 'TREES'
	| 'ICE'
	| 'FLAG'

export type TypeBonus = 'GRENADE' | 'HELMET' | 'STAR' | 'HP' | 'TIMER'

export type TypeBang = 'BIG' | 'SMALL'

export type TypeObject = TypeGameBLock | TypeBonus | TypeTank | 'BULLET'
