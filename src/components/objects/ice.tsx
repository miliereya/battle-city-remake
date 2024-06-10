import { GameObject } from '@/engine'
import { Pixel } from '@/types'
import { RenderObject } from '../render-object'
import { ice } from '@/models'

interface IceProps {
	ice: GameObject
	pixel: Pixel
}

export const Ice = (props: IceProps) => {
	const { coordinateX, coordinateY, id } = props.ice

	return (
		<div
			className="object"
			style={{
				left: `${coordinateX * props.pixel}px`,
				bottom: `${coordinateY * props.pixel}px`,
				zIndex: 1,
			}}
		>
			{ice.map((row, i) => (
				<RenderObject key={id + i} i={i} row={row} />
			))}
		</div>
	)
}
