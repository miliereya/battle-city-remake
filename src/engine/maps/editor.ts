import { EditorObject } from '../types'
import { MapInstance } from './map-instance'
import { Map } from '../types'
import { GameObject } from '../instances'

export const EditorMap = (editor: EditorObject[]): Map => {
	const editorGameObjects: GameObject[] = []
	for (let i = 0; i < editor.length; i++) {
		const o = editor[i]
		editorGameObjects.push(
			new GameObject(o.type, o.coordinateX / 8, o.coordinateY / 8)
		)
	}
	return {
		objects: [...MapInstance(), ...editorGameObjects],
		enemyList: [
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'NORMAL' },
			{ type: 'SPEEDY' },
			{ type: 'SPEEDY' },
		],
	}
}
