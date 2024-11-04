import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LauncherScreen from "./screens/Launcher/LauncherScreen"
import MainMenuScreen from './screens/MainMenu/MainMenuScreen'

export default function Application(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LauncherScreen />} />
				<Route path='/main-menu' element={<MainMenuScreen />} />
			</Routes>
		</BrowserRouter>
	)
}