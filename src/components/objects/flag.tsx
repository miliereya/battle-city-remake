import { Pixel } from '@/types'
import { RenderObject } from '../render-object'
import { flag } from '@/models'

interface FlagProps {
	isAlive: boolean
	pixel: Pixel
}

export const Flag = (props: FlagProps) => {
	return (
		<div
			className="object"
			style={{
				left: `${12 * 8 * props.pixel}px`,
				bottom: 0,
			}}
		>
			{props.isAlive
				? flag.alive.map((row, i) => (
						<RenderObject key={'flag' + i} i={i} row={row} />
					))
				: flag.dead.map((row, i) => (
						<RenderObject key={'flag' + i} i={i} row={row} />
					))}
		</div>
	)
}
