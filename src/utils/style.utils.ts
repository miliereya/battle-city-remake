import { TypeMoveButton } from '../types/game.types'

export const getDirectionDegrees = (direction: TypeMoveButton): string => {
	switch (direction) {
		case 'TOP':
			return '270deg'
		case 'LEFT':
			return '180deg'
		case 'BOTTOM':
			return '90deg'
		default:
			return '0deg'
	}
}
