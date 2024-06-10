import { Bang } from '@/engine'
import { RenderObject } from '../render-object'
import { bang } from '@/models'
import { Pixel } from '@/types'

interface BigBangProps {
	bang: Bang
	pixel: Pixel
}

export const BigBangAnimation = (props: BigBangProps) => {
	const { coordinateX, coordinateY, id, timer: t } = props.bang

	return (
		<>
			<div
				className="object"
				style={{
					scale: 1.4,
					left: `${(coordinateX - 7) * props.pixel}px`,
					bottom: `${(coordinateY - 7) * props.pixel}px`,
					zIndex: 10,
					opacity: (t > 0 && t < 3) || (t >= 12 && t < 15) ? 1 : 0,
				}}
			>
				{bang.t1.map((row, i) => (
					<RenderObject key={id + i} i={i} row={row} />
				))}
			</div>
			<div
				className="object"
				style={{
					scale: 1.4,
					left: `${(coordinateX - 7) * props.pixel}px`,
					bottom: `${(coordinateY - 7) * props.pixel}px`,
					zIndex: 10,
					opacity: (t >= 3 && t < 6) || (t >= 9 && t < 12) ? 1 : 0,
				}}
			>
				{bang.t2.map((row, i) => (
					<RenderObject key={id + i} i={i} row={row} />
				))}
			</div>
			<div
				className="object"
				style={{
					scale: 1.4,
					left: `${(coordinateX - 7) * props.pixel}px`,
					bottom: `${(coordinateY - 7) * props.pixel}px`,
					zIndex: 10,
					opacity: t >= 6 && t < 9 ? 1 : 0,
				}}
			>
				{bang.t3.map((row, i) => (
					<RenderObject key={id + i} i={i} row={row} />
				))}
			</div>
		</>
	)
}
