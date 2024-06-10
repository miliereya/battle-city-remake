import { Pixel } from '@/types'
import { GameObject } from '@/engine'
import { brick } from '@/models'
import { RenderObject } from '../render-object'

interface BrickProps {
	brick: GameObject
	pixel: Pixel
}

export const Brick = (props: BrickProps) => {
	const { coordinateX, coordinateY, id } = props.brick

	return (
		<div
			className="object"
			style={{
				left: `${coordinateX * props.pixel}px`,
				bottom: `${coordinateY * props.pixel}px`,
			}}
		>
			{brick.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
