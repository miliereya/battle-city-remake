import { EnemyList } from '../types'
import { Map1 } from './1'
import { Map2 } from './2'
import { Map3 } from './3'
import { Map4 } from './4'
import { Map5 } from './5'
import { Map6 } from './6'
import { Map7 } from './7'
import { Map8 } from './8'
import { Map9 } from './9'
import { Map10 } from './10'

export const maps = {
	map1: Map1(),
	map2: Map2(),
	map3: Map3(),
	map4: Map4(),
	map5: Map5(),
	map6: Map6(),
	map7: Map7(),
	map8: Map8(),
	map9: Map9(),
	map10: Map10(),
}

export * from './editor'
export * from './map-instance'

export const getHardcoreList = (): EnemyList[] => [
	{ type: 'HEAVY' },
	{ type: 'HEAVY' },
	{ type: 'SPEEDY' },
	{ type: 'SPEEDY' },
	{ type: 'HEAVY' },
	{ type: 'HEAVY' },
	{ type: 'SPEEDY' },
	{ type: 'SPEEDY' },
	{ type: 'HEAVY' },
	{ type: 'HEAVY' },
	{ type: 'SPEEDY' },
	{ type: 'SPEEDY' },
	{ type: 'HEAVY' },
	{ type: 'HEAVY' },
	{ type: 'SPEEDY' },
	{ type: 'SPEEDY' },
	{ type: 'HEAVY' },
	{ type: 'HEAVY' },
	{ type: 'SPEEDY' },
	{ type: 'SPEEDY' },
]
