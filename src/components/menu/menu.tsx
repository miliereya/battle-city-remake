import { useMenu, useMobile, usePixel } from '@/hooks'
import s from './menu.module.css'
import { Cursor } from './cursor'
import { useState } from 'react'
import { Editor } from '../editor/editor'

export const Menu = () => {
	const pixel = usePixel()
	const isMobile = useMobile()

	const [isEditing, setEditing] = useState(false)
	const { state, choose } = useMenu(isEditing, () => setEditing(true))

	if (isEditing) return <Editor close={() => setEditing(false)} />

	return (
		<div
			className={s.menu_wrapper}
			style={{
				width: `${pixel * 13 * 16}px`,
				height: `${pixel * 13 * 16}px`,
			}}
		>
			<img
				className={s.background}
				src="/img/main_menu.png"
				alt="main_menu"
			/>
			<div className={s.buttons_wrapper}>
				{state.map((btn) => {
					return (
						<p key={btn} className={s.menu_text}>
							{btn}
						</p>
					)
				})}
				{!isMobile && (
					<>
						<div className={s.p1_buttons}>
							<p className={s.buttons_text}>P1</p>
							<p className={s.buttons_text}>W A S D - MOVE</p>
							<p className={s.buttons_text}>F - FIRE</p>
							<p className={s.buttons_text}>SPACE - PAUSE</p>
						</div>
						<div className={s.p2_buttons}>
							<p className={s.buttons_text}>P2</p>
							<p className={s.buttons_text}>U H K J - MOVE</p>
							<p className={s.buttons_text}>L - FIRE</p>
							<p className={s.buttons_text}>SPACE - PAUSE</p>
						</div>
					</>
				)}
			</div>
			<Cursor choose={choose} />
		</div>
	)
}
