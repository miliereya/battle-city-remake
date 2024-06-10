import { GameObject } from '../instances'
import { mutationFilter } from '.'

export const deleteBlock = (id: string, objects: GameObject[]) => {
	mutationFilter(objects, (obj: GameObject) => obj.id !== id)
}
