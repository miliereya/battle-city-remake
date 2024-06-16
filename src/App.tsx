import { SetupLocal } from '@/components/setup-local'
import { Menu } from './components/menu/menu'
import { useGame } from '@/hooks'
import { SetupOnline } from './components/setup-online'

function App() {
	const { game } = useGame()

	if (!game) return <Menu />

	return game.id === 'local' ? <SetupLocal /> : <SetupOnline />
}

export default App
