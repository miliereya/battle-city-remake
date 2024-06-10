import { Bonus } from '@/engine'
import { Pixel } from '@/types'
import { RenderObject } from '../render-object'
import { grenade } from '@/models'

interface GrenadeProps {
	grenade: Bonus
	pixel: Pixel
}

let tick = 1
setInterval(() => {
	tick = tick === 1 ? 2 : 1
}, 150)

export const Grenade = (props: GrenadeProps) => {
	const { coordinateX, coordinateY, id } = props.grenade

	return (
		<div
			className="object"
			style={{
				left: `${coordinateX * props.pixel}px`,
				bottom: `${coordinateY * props.pixel}px`,
				zIndex: 10,
				opacity: tick === 1 ? 1 : 0,
			}}
		>
			{grenade.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
