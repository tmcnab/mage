import Screen from "@renderer/components/Screen";
import Header from "./Header/Header";
import Map from "./Map/Map";

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