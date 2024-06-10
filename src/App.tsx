import { SetupLocal } from '@/components/setup-local'
import { Menu } from './components/menu/menu'
import { useGame } from '@/hooks'

function App() {
	const { game } = useGame()

	if (!game) return <Menu />

	return game.id === 'local' ? <SetupLocal /> : null
}

export default App
