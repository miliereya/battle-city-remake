import { TankNormal } from './normal'
import { TankSpeedy } from './speedy'
import { TankHeavy } from './heavy'
import { SpawnAnimation } from '../animations/spawn'
import { Tank } from '@/engine'
import { usePixel } from '@/hooks'

interface EnemiesProps {
	enemies: Tank[]
}

export const Enemies = (props: EnemiesProps) => {
	const pixel = usePixel()
	return (
		<>
			{props.enemies.map((enemy) => {
				switch (enemy.type) {
					case 'NORMAL':
						return enemy.spawnAnimation ? (
							<SpawnAnimation
								key={enemy.id}
								pixel={pixel}
								tank={enemy}
							/>
						) : (
							<TankNormal
								key={enemy.id}
								pixel={pixel}
								tank={enemy}
							/>
						)
					case 'SPEEDY':
						return enemy.spawnAnimation ? (
							<SpawnAnimation
								key={enemy.id}
								pixel={pixel}
								tank={enemy}
							/>
						) : (
							<TankSpeedy
								key={enemy.id}
								pixel={pixel}
								tank={enemy}
							/>
						)
					case 'HEAVY':
						return enemy.spawnAnimation ? (
							<SpawnAnimation
								key={enemy.id}
								pixel={pixel}
								tank={enemy}
							/>
						) : (
							<TankHeavy
								tank={enemy}
								pixel={pixel}
								key={enemy.id}
							/>
						)
				}
			})}
		</>
	)
}
