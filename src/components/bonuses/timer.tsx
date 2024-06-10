import { Bonus } from '@/engine'
import { timer } from '@/models'
import { Pixel } from '@/types'
import { RenderObject } from '../render-object'

interface TimerProps {
	timer: Bonus
	pixel: Pixel
}

let tick = 1
setInterval(() => {
	tick = tick === 1 ? 2 : 1
}, 150)

export const Timer = (props: TimerProps) => {
	const { coordinateX, coordinateY, id } = props.timer

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
			{timer.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
