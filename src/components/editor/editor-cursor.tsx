import { usePixel } from '@/hooks'
import { TypeEditorChoose } from '@/types'
import { RenderObject } from '../render-object'
import { brick, ice, stone, trees, water } from '@/models'

const objectsMap: Record<string, string[][]> = {
	STONE: stone,
	BRICK: brick,
	ICE: ice,
	WATER: water.t1,
	TREES: trees,
}

interface Props {
	x: number
	y: number
	currentType: TypeEditorChoose
}

export const EditorCursor = ({ x, y, currentType }: Props) => {
	const pixel = usePixel()

	return (
		<div
			style={{
				position: 'absolute',
				width: `${8 * pixel}px`,
				height: `${8 * pixel}px`,
				outline: `2px solid #fff`,
				left: `${x * 8 * pixel}px`,
				bottom: `${y * 8 * pixel}px`,
				zIndex: 20,
			}}
		>
			{currentType === 'DELETE' ? (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'red',
						fontSize: 26,
						width: `${8 * pixel}px`,
						height: `${8 * pixel}px`,
					}}
				>
					❌
				</div>
			) : (
				<>
					{objectsMap[currentType].map((row, i) => (
						<RenderObject key={i} i={i} row={row} />
					))}
				</>
			)}
		</div>
	)
}
