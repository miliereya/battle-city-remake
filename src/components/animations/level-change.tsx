import s from './animations.module.css'

interface LevelChangeAnimationProps {
	level: number
}

export const LevelChangeAnimation = (props: LevelChangeAnimationProps) => {
	return (
		<div className={s.gray_screen_wrapper}>
			<div className={s.gray_screen_block}></div>
			<p className={s.gray_screen_text}>STAGE {props.level}</p>
			<div className={s.gray_screen_block}></div>
		</div>
	)
}
