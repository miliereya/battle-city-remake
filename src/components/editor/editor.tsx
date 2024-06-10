import { useEffect, useState } from 'react'
import s from './editor.module.css'
import { TypeEditorChoose } from '@/types'
import { useEditorKeys, useGame, usePixel } from '@/hooks'
import { Brick, Flag, Ice, Stone, Trees, Water } from '../objects'
import { Player1 } from '../players/player1'
import { Player2 } from '../players/player2'
import { GameObject, Player, Tank } from '@/engine'
import { TankNormal } from '../enemies'
import { EditorCursor } from './editor-cursor'

interface Props {
	close: () => void
}

const restrictedAreas = [
	[10, 15, 0, 3],
	[7, 10, 0, 2],
	[15, 18, 0, 2],
	[0, 2, 24, 25],
	[12, 14, 24, 25],
	[24, 25, 24, 25],
]

const bricks = [
	{ x: 14, y: 0 },
	{ x: 14, y: 1 },
	{ x: 14, y: 2 },
	{ x: 13, y: 2 },
	{ x: 12, y: 2 },
	{ x: 11, y: 2 },
	{ x: 11, y: 1 },
	{ x: 11, y: 0 },
]

export const Editor = ({ close }: Props) => {
	const { editor, setEditor, setEdited } = useGame()
	const [currentType, setCurrentType] = useState<TypeEditorChoose>('BRICK')
	const [x, setX] = useState(13)
	const [y, setY] = useState(13)
	const [id, setId] = useState(0)
	const [isDoneSelected, setDoneSelected] = useState(false)

	useEffect(() => {
		setEdited()
	}, [setEdited])

	const chooseHandler = (code: string) => {
		const handleMove = () => {
			if (code === 'KeyD' && x === 25) {
				setDoneSelected(true)
			}
			if (y !== 25 && code === 'KeyW') {
				setY((prev) => prev + 1)
			}
			if (x !== 25 && code === 'KeyD') {
				setX((prev) => prev + 1)
			}
			if (x !== 0 && code === 'KeyA') {
				setX((prev) => prev - 1)
			}
			if (y !== 0 && code === 'KeyS') {
				setY((prev) => prev - 1)
			}
		}

		const handleTypeChange = () => {
			const types = [
				'BRICK',
				'STONE',
				'WATER',
				'TREES',
				'ICE',
				'DELETE',
			] as const
			const nextTypeIndex =
				(types.indexOf(currentType) + 1) % types.length
			setCurrentType(types[nextTypeIndex])
		}

		const handleEditorUpdate = () => {
			if (
				restrictedAreas.some(
					([xMin, xMax, yMin, yMax]) =>
						x > xMin && x < xMax && y >= yMin && y < yMax
				)
			) {
				return
			}

			const obj = editor.find(
				(o) => o.coordinateX === x * 8 && o.coordinateY === y * 8
			)

			if (obj?.type === currentType) return

			if (currentType === 'DELETE') {
				if (obj) {
					setEditor((prev) => prev.filter((o) => o.id !== obj.id))
				}
			} else {
				const newObj = {
					type: currentType,
					coordinateX: x * 8,
					coordinateY: y * 8,
					id: String(id),
				}

				setEditor((prev) =>
					obj
						? [...prev.filter((o) => o.id !== obj.id), newObj]
						: [...prev, newObj]
				)
				setId((prev) => prev + 1)
			}
		}

		if (isDoneSelected) {
			if (code === 'KeyA') {
				setDoneSelected(false)
			}
			if (code === 'Space') {
				close()
			}
		} else {
			if (code === 'KeyF') {
				handleTypeChange()
			}
			if (code === 'Space') {
				handleEditorUpdate()
			} else {
				handleMove()
			}
		}
	}

	useEditorKeys(chooseHandler)

	const pixel = usePixel()

	return (
		<div
			className="game"
			style={{
				width: `${pixel * 13 * 16}px`,
				height: `${pixel * 13 * 16}px`,
			}}
		>
			<p
				className={s.done_text}
				style={{
					color: isDoneSelected ? '#000' : '#fff',
				}}
			>
				DONE
			</p>
			{!isDoneSelected && (
				<EditorCursor currentType={currentType} x={x} y={y} />
			)}
			{editor.map((obj) => {
				switch (obj.type) {
					case 'STONE':
						return <Stone key={obj.id} stone={obj} pixel={pixel} />
					case 'BRICK':
						return <Brick key={obj.id} brick={obj} pixel={pixel} />
					case 'WATER':
						return <Water key={obj.id} water={obj} pixel={pixel} />
					case 'TREES':
						return <Trees key={obj.id} trees={obj} pixel={pixel} />
					case 'ICE':
						return <Ice key={obj.id} ice={obj} pixel={pixel} />
				}
			})}
			<Player1
				p={
					{
						coordinateX: 71,
						coordinateY: 7,
						direction: 'TOP',
						tick: 1,
						type: 'LVL_0',
						helmet: 0,
						spawnAnimation: 0,
					} as Player
				}
			/>
			<Player2
				p={
					{
						coordinateX: 136,
						coordinateY: 7,
						direction: 'TOP',
						tick: 1,
						type: 'LVL_0',
						helmet: 0,
						spawnAnimation: 0,
					} as Player
				}
			/>
			<TankNormal pixel={pixel} tank={new Tank('left', 'NORMAL')} />
			<TankNormal pixel={pixel} tank={new Tank('middle', 'NORMAL')} />
			<TankNormal pixel={pixel} tank={new Tank('right', 'NORMAL')} />
			<Flag pixel={pixel} isAlive={true} />
			{bricks.map(({ x, y }) => (
				<Brick
					key={`${x}${y}`}
					brick={new GameObject('BRICK', x, y)}
					pixel={pixel}
				/>
			))}
		</div>
	)
}
