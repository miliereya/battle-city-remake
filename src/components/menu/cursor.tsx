import { tank_p1__lvl_0 } from '@/models'
import { getDirectionDegrees } from '@/utils'
import { RenderObject } from '../render-object'
import { usePixel } from '@/hooks'

const calculatePlayerYCoordinates = (choose: number) => {
	switch (choose) {
		case 1:
			return 79
		case 2:
			return 69
		case 3:
			return 59
		case 4:
			return 48
		default:
			return 38
	}
}

interface Props {
	choose: number
}

export const Cursor = ({ choose }: Props) => {
	const pixel = usePixel()

	return (
		<div
			style={{
				rotate: getDirectionDegrees('RIGHT'),
				left: `${(54 - 7) * pixel}px`,
				bottom: `${
					(calculatePlayerYCoordinates(choose) - 7) * pixel
				}px`,
				position: 'absolute',
				scale: '0.7',
			}}
		>
			{tank_p1__lvl_0.t1.map((row, i) => (
				<RenderObject key={'1' + i} i={i} row={row} />
			))}
		</div>
	)
}
