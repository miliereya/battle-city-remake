import { GameObject } from '../instances'

export const MapInstance = () => {
	return [
		new GameObject('FLAG', 12, 0),
		new GameObject('FLAG', 12, 1),
		new GameObject('FLAG', 13, 0),
		new GameObject('FLAG', 13, 1),
		new GameObject('BRICK', 11, 2),
		new GameObject('BRICK', 12, 2),
		new GameObject('BRICK', 13, 2),
		new GameObject('BRICK', 14, 2),
		new GameObject('BRICK', 11, 0),
		new GameObject('BRICK', 11, 1),
		new GameObject('BRICK', 14, 0),
		new GameObject('BRICK', 14, 1),
	]
}
