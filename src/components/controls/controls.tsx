import { useMobile } from '@/hooks'
import s from './controls.module.css'

export const Controls = () => {
	const isMobile = useMobile()

	return (
		isMobile && (
			<div>
				<div className={s.control_wrapper}>
					<div className={s.control_top_wrapper}>
						<button id="top1" className={s.control_button}>
							↑
						</button>
					</div>
					<div className={s.control_top_wrapper}>
						<button id="left1" className={s.control_button}>
							←
						</button>
						<button id="fire1" className={s.control_button}>
							◌
						</button>
						<button id="right1" className={s.control_button}>
							→
						</button>
					</div>
					<div className={s.control_top_wrapper}>
						<button id="bottom1" className={s.control_button}>
							↓
						</button>
					</div>
				</div>
				<div className={s.pause_wrapper}>
					<button id="space" className={s.control_button}>
						_
					</button>
				</div>
				<div className={s.control_wrapper_2}>
					<div className={s.control_top_wrapper}>
						<button id="top2" className={s.control_button}>
							↑
						</button>
					</div>
					<div className={s.control_top_wrapper}>
						<button id="left2" className={s.control_button}>
							←
						</button>
						<button id="fire2" className={s.control_button}>
							◌
						</button>
						<button id="right2" className={s.control_button}>
							→
						</button>
					</div>
					<div className={s.control_top_wrapper}>
						<button id="bottom2" className={s.control_button}>
							↓
						</button>
					</div>
				</div>
			</div>
		)
	)
}
