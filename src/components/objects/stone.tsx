import { GameObject } from '@/engine'
import { stone } from '@/models'
import { Pixel } from '@/types'
import { RenderObject } from '../render-object'

interface StoneProps {
	stone: GameObject
	pixel: Pixel
}

export const Stone = (props: StoneProps) => {
	const { coordinateX, coordinateY, id } = props.stone

	return (
		<div
			className="object"
			style={{
				left: `${coordinateX * props.pixel}px`,
				bottom: `${coordinateY * props.pixel}px`,
			}}
		>
			{stone.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
