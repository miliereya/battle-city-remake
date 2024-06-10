import { Game, Player } from '../instances'
import { TypeObject, TypeTank } from '../types'

export const isEnemy = (type: TypeTank | TypeObject) =>
	type === 'NORMAL' || type === 'SPEEDY' || type === 'HEAVY' ? true : false

export const isPlayer = (type: TypeTank | TypeObject) =>
	type === 'LVL_0' || type === 'LVL_1' || type === 'LVL_2' || type === 'LVL_3'
		? true
		: false

export const isImpassibleGameObject = (type: TypeTank | TypeObject) =>
	type === 'BRICK' || type === 'WATER' || type === 'STONE' || type === 'FLAG'
		? true
		: false

export const isTank = (type: TypeTank | TypeObject) =>
	isEnemy(type) || isPlayer(type) ? true : false

export const isPlayerDead = (p: Player) =>
	p.lives && !p.deathCooldown ? false : true

export const isGameOver = (game: Game) => {
	const { p1, p2, isFlagAlive } = game
	return (!game.gameOverAnimation && !p1.lives && (!p2 || !p2.lives)) ||
		(!isFlagAlive && !game.gameOverAnimation)
		? true
		: false
}

export const isPlayerCanShoot = (p: Player) =>
	p.deathCooldown || !p.availableBullets || p.spawnAnimation ? false : true

export const isPlayerCanMove = (p: Player) =>
	p.deathCooldown || p.spawnAnimation ? false : true

export const isBulletHitObject = (
	busyX: number,
	busyY: number,
	x: number,
	y: number
) =>
	((busyY === y + 2 ||
		busyY === y - 2 ||
		busyY + 7 === y + 2 ||
		busyY + 7 === y - 2) &&
		busyX >= x - 8 &&
		busyX <= x + 1) ||
	((busyX === x + 2 ||
		busyX === x - 2 ||
		busyX + 7 === x + 2 ||
		busyX + 7 === x - 2) &&
		busyY >= y - 8 &&
		busyY <= y + 1)

export const isBulletHitTank = (
	busyX: number,
	busyY: number,
	x: number,
	y: number
) =>
	((busyY - 7 === y + 2 ||
		busyY - 7 === y - 2 ||
		busyY + 7 === y + 2 ||
		busyY + 7 === y - 2) &&
		busyX >= x - 8 &&
		busyX <= x + 8) ||
	((busyX - 7 === x + 2 ||
		busyX - 7 === x - 2 ||
		busyX + 7 === x + 2 ||
		busyX + 7 === x - 2) &&
		busyY >= y - 8 &&
		busyY <= y + 8)

export const isBulletHitBullet = (
	busyX: number,
	busyY: number,
	x: number,
	y: number
) =>
	((busyY - 1 === y + 1 ||
		busyY - 1 === y - 1 ||
		busyY + 1 === y + 1 ||
		busyY + 1 === y - 1) &&
		busyX >= x - 2 &&
		busyX <= x + 2) ||
	((busyX - 1 === x + 1 ||
		busyX - 1 === x - 1 ||
		busyX + 1 === x + 1 ||
		busyX + 1 === x - 1) &&
		busyY === y)

export const isOneSpeedShooter = (shooter: TypeTank) =>
	shooter === 'NORMAL' ||
	shooter === 'SPEEDY' ||
	shooter === 'HEAVY' ||
	shooter === 'LVL_0'
