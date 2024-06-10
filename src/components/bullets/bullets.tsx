import { render_bullet } from '@/models'
import { RenderObject } from '../render-object'
import { getDirectionDegrees } from '@/utils'
import { usePixel } from '@/hooks'
import { Bullet } from '@/engine'

interface BulletsProps {
	bullets: Bullet[]
}

export const Bullets = (props: BulletsProps) => {
	const pixel = usePixel()

	return (
		<>
			{props.bullets.map((bullet) => {
				const { coordinateX, coordinateY, direction, id } = bullet
				return (
					<div
						key={id}
						style={{
							rotate: getDirectionDegrees(direction),
							left: `${(coordinateX - 1.5) * pixel}px`,
							bottom: `${(coordinateY - 1) * pixel}px`,
							position: 'absolute',
							zIndex: 3,
						}}
					>
						{render_bullet.map((row, i) => (
							<RenderObject key={id + i} i={i} row={row} />
						))}
					</div>
				)
			})}
		</>
	)
}
