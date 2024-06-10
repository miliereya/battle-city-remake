import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/global.css'
import { GameProvider } from './components/game-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameProvider>
			<App />
		</GameProvider>
	</React.StrictMode>
)
