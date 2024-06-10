import { mutationFilter } from '.'
import { Bonus } from '../instances'
import { EnemyList, TypeBonus } from '../types'

const bonusList: { [key: number]: TypeBonus } = {
	1: 'GRENADE',
	2: 'HELMET',
	3: 'TIMER',
	4: 'HP',
	5: 'STAR',
}

type RandomValue = 1 | 2 | 3 | 4 | 5

const generateRandomValue = (prevVal: number): RandomValue => {
	const randomVal = Math.floor(Math.random() * 5 + 1) as RandomValue
	if (randomVal === prevVal) return generateRandomValue(prevVal)
	else return randomVal as RandomValue
}

export const generateBonuses = (enemyList: EnemyList[]) => {
	let prevVal = 0
	for (let i = 3; i < enemyList.length; i += 5) {
		const randomVal = generateRandomValue(prevVal)

		enemyList[i].bonus = bonusList[randomVal]

		prevVal = randomVal
	}
	return enemyList
}

export const generateBonusCoordinates = () => {
	return {
		x: Math.floor(Math.random() * 187 + 10),
		y: Math.floor(Math.random() * 187 + 10),
	}
}

export const deleteBonus = (id: string, bonuses: Bonus[]) => {
	mutationFilter(bonuses, (obj: Bonus) => obj.id !== id)
}
