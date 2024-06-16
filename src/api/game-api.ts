import { Socket, io } from 'socket.io-client'
import { GAME_ACTIONS, LOBBY_ACTIONS } from './game-actions'
import { EditorObject, Game, GameSettings } from '@/engine'
import { Dispatch, SetStateAction } from 'react'

const socket = io(import.meta.env.VITE_API_SERVER ?? '', {
	withCredentials: true,
})

const subOnGame = (
	socket: Socket,
	setGame: Dispatch<SetStateAction<Game | undefined>>
) => {
	socket.on(GAME_ACTIONS.FRAME, ({ game }: { game: Game }) => {
		if (game.isEnded) {
			setGame(undefined)
			socket.off(GAME_ACTIONS.FRAME)
		} else setGame(game)
	})
}

export const gameApi = {
	createLobby(
		id: string,
		setGame: Dispatch<SetStateAction<Game | undefined>>,
		settings: GameSettings,
		editor?: EditorObject[]
	) {
		socket.emit(LOBBY_ACTIONS.CREATE, { id, settings, editor })
		subOnGame(socket, setGame)
	},

	joinLobby(id: string, setGame: Dispatch<SetStateAction<Game | undefined>>) {
		socket.emit(LOBBY_ACTIONS.JOIN, id, (res: string) => {
			if (res === 'NOT_FOUND') {
				alert('Not Found')
			}
		})
		subOnGame(socket, setGame)
	},

	deleteLobby(id: string) {
		socket.emit(LOBBY_ACTIONS.DELETE, id)
		socket.off(GAME_ACTIONS.FRAME)
	},

	input(button: string, gameId: string) {
		socket.emit(GAME_ACTIONS.INPUT, { button, gameId })
	},
}
