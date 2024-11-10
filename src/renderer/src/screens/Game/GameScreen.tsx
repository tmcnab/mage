import Header from "./Header/Header"
import Map from "./Map/Map"
import Screen from "@renderer/components/Screen"

export default function GameScreen(): JSX.Element {
	const year = 1935
	const nation = 'fra'

	return (
		<Screen>
			<Header />
			<Map />
		</Screen>
	)
}