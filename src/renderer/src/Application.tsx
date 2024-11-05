import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreditsScreen from './screens/Credits/CreditsScreen'
import LauncherScreen from "./screens/Launcher/LauncherScreen"
import MainMenuScreen from './screens/MainMenu/MainMenuScreen'
import OptionsScreen from './screens/Options/OptionsScreen'
import GameSetupScreen from './screens/GameSetup/GameSetupScreen'

export default function Application(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LauncherScreen />} />
				<Route path='/credits' element={<CreditsScreen />} />
				<Route path='/game-setup' element={<GameSetupScreen />} />
				<Route path='/main-menu' element={<MainMenuScreen />} />
				<Route path='/options' element={<OptionsScreen />} />
			</Routes>
		</BrowserRouter>
	)
}