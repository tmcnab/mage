import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LauncherScreen from "./screens/Launcher/LauncherScreen"
import MainMenuScreen from './screens/MainMenu/MainMenuScreen'
import OptionsScreen from './screens/Options/OptionsScreen'

export default function Application(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LauncherScreen />} />
				<Route path='/main-menu' element={<MainMenuScreen />} />
				<Route path='/options' element={<OptionsScreen />} />
			</Routes>
		</BrowserRouter>
	)
}