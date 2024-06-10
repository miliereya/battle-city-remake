import { EditorObject, Game, GameSettings, gameFrame } from '@/engine'
import { CreateGameObject } from '@/types'
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'
import { Controls } from './controls/controls'

interface GameContextInterface {
	game?: Game
	setGame: Dispatch<SetStateAction<Game | undefined>>
	editor: CreateGameObject[]
	setEditor: Dispatch<SetStateAction<CreateGameObject[]>>
	setEdited: () => void
	startLocalGame: (
		players: 1 | 2,
		settings: GameSettings,
		editor?: EditorObject[]
	) => void
}

export const GameContext = createContext<GameContextInterface>({
	game: undefined,
	setGame: () => {},
	editor: [],
	setEditor: () => {},
	setEdited: () => {},
	startLocalGame: () => {},
})

interface Props {
	children: ReactNode
}

export const GameProvider = ({ children }: Props) => {
	const [game, setGame] = useState<Game>()
	const [editor, setEditor] = useState<CreateGameObject[]>([])
	const [isEdited, setEdited] = useState(false)

	const startLocalGame = (players: 1 | 2, settings: GameSettings) => {
		const newGame = new Game(
			'local',
			'p1',
			players === 2 ? 'p2' : null,
			settings,
			isEdited ? editor : undefined
		)

		setGame(newGame)
		setEdited(false)

		const gameInterval = setInterval(() => {
			try {
				gameFrame(newGame)

				if (newGame.isEnded) {
					clearInterval(gameInterval)
					setGame(undefined)
				}
			} catch (error) {
				alert('Game crashed :(')
				console.error('Error during game frame:', error)
				clearInterval(gameInterval)
				setGame(undefined)
			}
		}, 25)
	}

	return (
		<GameContext.Provider
			value={{
				game,
				setGame,
				editor,
				setEditor,
				startLocalGame,
				setEdited: () => setEdited(true),
			}}
		>
			<Controls />
			{children}
		</GameContext.Provider>
	)
}
