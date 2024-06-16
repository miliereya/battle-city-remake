import { GameSettings } from '@/engine'
import { TypePlayerLevel } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { useGame } from './useGame'
import { getRandomInt } from '@/utils'

type MenuState =
	| 'main'
	| '1 player'
	| '2 players'
	| 'multiplayer'
	| 'settings'
	| 'create lobby'
	| 'join lobby'
	| 'lobby'
	| 'find lobby'

const menuStates = (
	gameSettings: GameSettings,
	lobbyId: string,
	searchingLobbyId: string
) => ({
	main: ['1 PLAYER', '2 PLAYERS', 'MULTIPLAYER', 'SETTINGS'],
	'1 player': ['PLAY', 'CONSTRUCTION', 'BACK'],
	'2 players': ['PLAY', 'CONSTRUCTION', 'BACK'],
	multiplayer: ['CREATE LOBBY', 'FIND LOBBY', 'BACK'],
	'create lobby': [`ID:  ${lobbyId}`, 'CREATE', 'CONSTRUCTION', 'BACK'],
	'find lobby': [`ID: ${searchingLobbyId}`, 'FIND LOBBY', 'BACK'],
	'join lobby': ['WAITING'],
	lobby: [`ID: ${lobbyId}`, '(WAIT FOR P2)', 'BACK'],
	settings: [
		`SOUND (${gameSettings.soundPack})`,
		`FRIENDLY FIRE (${gameSettings.friendlyFire ? 'y' : 'n'})`,
		`PLAYER LEVEL (${gameSettings.playerLevel})`,
		`HARDCORE (${gameSettings.hardcore ? 'y' : 'n'})`,
		`BACK`,
	],
})

export const useMenu = () => {
	const { startLocalGame, createLobby, joinLobby } = useGame()

	const [isEditing, setEditing] = useState(false)
	const [choose, setChoose] = useState(1)
	const [range, setRange] = useState(4)
	const [state, setState] = useState<MenuState>('main')

	// Game Settings
	const [soundPack, setSoundPack] = useState<'default' | 'mario'>('default')
	const [hardcore, setHardcore] = useState(false)
	const [friendlyFire, setFriendlyFire] = useState(false)
	const [playerLevel, setPlayerLevel] = useState<TypePlayerLevel>(0)

	// Lobbying
	const [lobbyId, setLobbyId] = useState('1000')
	const [searchingLobbyId, setSearchingLobbyId] = useState('')

	const getMenuStates = () =>
		menuStates(gameSettings, lobbyId, searchingLobbyId)

	const playMenuSound = useCallback(() => {
		const sound = new Audio(`/audio/${soundPack}/menu.ogg`)
		sound.volume = 0.3
		sound.play()
	}, [soundPack])

	const playChooseSound = useCallback(() => {
		const sound = new Audio(`/audio/${soundPack}/shoot.ogg`)
		sound.volume = 0.3
		sound.play()
	}, [soundPack])

	const gameSettings: GameSettings = {
		friendlyFire,
		hardcore,
		playerLevel,
		soundPack,
	}

	const settings: GameSettings = {
		hardcore,
		playerLevel,
		friendlyFire,
		soundPack,
	}

	const updateState = (newState: MenuState) => {
		setRange(getMenuStates()[newState].length)
		setState(newState)
		setChoose(1)
		playChooseSound()
	}

	const setChooseHandler = useCallback(
		(action: '+' | '-') => {
			setChoose((prev) => {
				if (action === '+') {
					return prev + 1 > range ? 1 : prev + 1
				} else {
					return prev - 1 === 0 ? range : prev - 1
				}
			})
			playMenuSound()
		},
		[range, soundPack]
	)

	useEffect(() => {
		const chooseHandler = (code: string) => {
			if (isEditing) return

			if (code === 'KeyW') {
				setChooseHandler('-')
			}

			if (code === 'KeyS') {
				setChooseHandler('+')
			}

			if (code === 'Enter' || code === 'KeyF' || code === 'Space') {
				switch (state) {
					case 'main':
						switch (choose) {
							case 1:
								updateState('1 player')
								break
							case 2:
								updateState('2 players')
								break
							case 3:
								updateState('multiplayer')
								break
							case 4:
								updateState('settings')
								break
						}
						break
					case '1 player':
						switch (choose) {
							case 1:
								startLocalGame(1, settings)
								break
							case 2:
								setEditing(true)
								break
							case 3:
								updateState('main')
								break
						}
						break
					case '2 players':
						switch (choose) {
							case 1:
								startLocalGame(2, settings)
								break
							case 2:
								setEditing(true)
								break
							case 3:
								updateState('main')
								break
						}
						break
					case 'settings':
						switch (choose) {
							case 1:
								setSoundPack((prev) =>
									prev === 'default' ? 'mario' : 'default'
								)
								break
							case 2:
								setFriendlyFire((prev) => !prev)
								break
							case 3:
								setPlayerLevel((prev) =>
									prev === 3
										? 0
										: ((prev + 1) as TypePlayerLevel)
								)
								break
							case 4:
								setHardcore((prev) => !prev)
								break
							case 5:
								updateState('main')
								break
						}
						break
					case 'multiplayer':
						switch (choose) {
							case 1:
								updateState('create lobby')
								setLobbyId(String(getRandomInt(1000, 9999)))
								break
							case 2:
								updateState('find lobby')
								break
							case 3:
								updateState('main')
								break
						}
						break
					case 'create lobby':
						switch (choose) {
							case 2:
								updateState('lobby')
								createLobby(lobbyId, settings)
								break
							case 3:
								setEditing(true)
								break
							case 4:
								updateState('multiplayer')
								break
						}
						break
					case 'lobby':
						switch (choose) {
							case 3:
								updateState('multiplayer')
								break
						}
						break
					case 'find lobby':
						switch (choose) {
							case 1:
								setSearchingLobbyId(prompt()?.slice(0, 4) ?? '')
								break
							case 2:
								if (!searchingLobbyId) break

								joinLobby(searchingLobbyId)
								break
							case 3:
								updateState('multiplayer')
								setSearchingLobbyId('')
								break
						}
						break
				}
			}
		}

		const chooseHandlerListener = (e: KeyboardEvent) => {
			chooseHandler(e.code)
		}

		document.addEventListener('keypress', chooseHandlerListener)

		return () => {
			document.removeEventListener('keypress', chooseHandlerListener)
		}
	}, [state, choose, soundPack, isEditing])

	return {
		state: getMenuStates()[state],
		choose,
		isEditing,
		setEditing,
	}
}
