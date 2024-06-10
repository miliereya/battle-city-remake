import { GameObject } from '@/engine'
import { trees } from '@/models'
import { Pixel } from '@/types'
import { RenderObject } from '../render-object'

interface TreesProps {
	trees: GameObject
	pixel: Pixel
}

export const Trees = (props: TreesProps) => {
	const { coordinateX, coordinateY, id } = props.trees

	return (
		<div
			className="object"
			style={{
				left: `${coordinateX * props.pixel}px`,
				bottom: `${coordinateY * props.pixel}px`,
				zIndex: 5,
			}}
		>
			{trees.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
