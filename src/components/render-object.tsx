import { memo } from 'react'

interface RenderObjectProps {
	row: string[]
	i: number
}

export const RenderObject = memo(({ row, i }: RenderObjectProps) => {
	return (
		<div key={0 + i} className="row">
			{row.map((px, i) => {
				return (
					<div
						style={{ backgroundColor: px }}
						className="pixel"
						key={px + i}
					></div>
				)
			})}
		</div>
	)
})
