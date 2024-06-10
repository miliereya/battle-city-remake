import { Stone } from './stone'
import { Brick } from './brick'
import { Water } from './water'
import { Trees } from './trees'
import { Ice } from './ice'
import { usePixel } from '@/hooks'
import { GameObject } from '@/engine'

interface ObjectProps {
	objects: GameObject[]
}

export const Objects = (props: ObjectProps) => {
	const pixel = usePixel()
	return (
		<>
			{props.objects.map((obj) => {
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
		</>
	)
}
