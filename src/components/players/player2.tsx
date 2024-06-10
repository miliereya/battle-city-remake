import { RenderObject } from '../render-object'
import { SpawnAnimation } from '../animations/spawn'
import { usePixel } from '@/hooks'
import {
	shield,
	tank_p2__lvl_0,
	tank_p2__lvl_1,
	tank_p2__lvl_2,
	tank_p2__lvl_3,
} from '@/models'
import { getDirectionDegrees } from '@/utils'
import { Player } from '@/engine'

interface PlayerProps {
	p: Player
}

let shieldTick = 1
setInterval(() => {
	shieldTick = shieldTick === 1 ? 2 : 1
}, 80)

export const Player2 = (props: PlayerProps) => {
	const {
		coordinateX,
		coordinateY,
		direction,
		tick,
		type,
		helmet,
		spawnAnimation,
	} = props.p

	const pixel = usePixel()

	return (
		<>
			{spawnAnimation ? (
				<SpawnAnimation pixel={pixel} tank={props.p} />
			) : (
				<>
					{helmet && (
						<>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: 11,
									opacity: shieldTick === 1 ? 1 : 0,
								}}
							>
								{shield.t1.map((row, i) => (
									<RenderObject
										key={'1' + i}
										i={i}
										row={row}
									/>
								))}
							</div>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: 11,
									opacity: shieldTick === 2 ? 1 : 0,
								}}
							>
								{shield.t2.map((row, i) => {
									return (
										<RenderObject
											key={'2' + i}
											i={i}
											row={row}
										/>
									)
								})}
							</div>
						</>
					)}
					{type === 'LVL_0' && (
						<>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 1 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_0.t1.map((row, i) => (
									<RenderObject
										key={'1' + i}
										i={i}
										row={row}
									/>
								))}
							</div>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 2 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_0.t2.map((row, i) => {
									return (
										<RenderObject
											key={'2' + i}
											i={i}
											row={row}
										/>
									)
								})}
							</div>
						</>
					)}
					{type === 'LVL_1' && (
						<>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 1 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_1.t1.map((row, i) => (
									<RenderObject
										key={'1' + i}
										i={i}
										row={row}
									/>
								))}
							</div>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 2 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_1.t2.map((row, i) => {
									return (
										<RenderObject
											key={'2' + i}
											i={i}
											row={row}
										/>
									)
								})}
							</div>
						</>
					)}
					{type === 'LVL_2' && (
						<>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 1 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_2.t1.map((row, i) => (
									<RenderObject
										key={'1' + i}
										i={i}
										row={row}
									/>
								))}
							</div>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 2 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_2.t2.map((row, i) => {
									return (
										<RenderObject
											key={'2' + i}
											i={i}
											row={row}
										/>
									)
								})}
							</div>
						</>
					)}
					{type === 'LVL_3' && (
						<>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 1 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_3.t1.map((row, i) => (
									<RenderObject
										key={'1' + i}
										i={i}
										row={row}
									/>
								))}
							</div>
							<div
								style={{
									rotate: getDirectionDegrees(direction),
									left: `${(coordinateX - 7) * pixel}px`,
									bottom: `${(coordinateY - 7) * pixel}px`,
									position: 'absolute',
									zIndex: tick === 2 ? 2 : 1,
								}}
							>
								{tank_p2__lvl_3.t2.map((row, i) => {
									return (
										<RenderObject
											key={'2' + i}
											i={i}
											row={row}
										/>
									)
								})}
							</div>
						</>
					)}
				</>
			)}
		</>
	)
}
