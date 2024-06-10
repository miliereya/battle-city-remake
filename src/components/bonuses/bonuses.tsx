import { Timer } from './timer'
import { Star } from './star'
import { Grenade } from './grenade'
import { Helmet } from './helmet'
import { Hp } from './hp'
import { Bonus } from '@/engine'
import { usePixel } from '@/hooks'

interface ObjectProps {
	bonuses: Bonus[]
}

export const Bonuses = (props: ObjectProps) => {
	const pixel = usePixel()
	return (
		<>
			{props.bonuses.map((obj) => {
				switch (obj.type) {
					case 'TIMER':
						return <Timer key={obj.id} pixel={pixel} timer={obj} />
					case 'STAR':
						return <Star key={obj.id} pixel={pixel} star={obj} />
					case 'GRENADE':
						return (
							<Grenade key={obj.id} pixel={pixel} grenade={obj} />
						)
					case 'HELMET':
						return (
							<Helmet key={obj.id} pixel={pixel} helmet={obj} />
						)
					case 'HP':
						return <Hp key={obj.id} pixel={pixel} hp={obj} />
				}
			})}
		</>
	)
}
