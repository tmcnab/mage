import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreditsScreen from './screens/Credits/CreditsScreen'
import GameScreen from './screens/Game/GameScreen'
import GameSetupScreen from './screens/GameSetup/GameSetupScreen'
import LauncherScreen from "./screens/Launcher/LauncherScreen"
import MainMenuScreen from './screens/MainMenu/MainMenuScreen'
import OptionsScreen from './screens/Options/OptionsScreen'

export default function Application(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LauncherScreen />} />
				<Route path='/credits' element={<CreditsScreen />} />
				<Route path='/game-setup' element={<GameSetupScreen />} />
				<Route path='/game' element={<GameScreen />} />
				<Route path='/main-menu' element={<MainMenuScreen />} />
				<Route path='/options' element={<OptionsScreen />} />
			</Routes>
		</BrowserRouter>
	)
}