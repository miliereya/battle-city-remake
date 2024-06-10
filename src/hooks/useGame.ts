import { GameContext } from '@/components/game-provider'
import { useContext } from 'react'

export const useGame = () => useContext(GameContext)
