import Flex from "@renderer/components/Flex"
import Header from "./Header"
import MenuButton from "@renderer/components/MenuButton"
import Screen from "@renderer/components/Screen"

export default function LauncherScreen(): JSX.Element {
	return (
		<Screen>
			<Flex orientation='vertical'>
				<Header />
				<main>
				</main>
				<footer style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
					<MenuButton label='Start' />
					<a href='/main-menu'>Main menu</a>
				</footer>
			</Flex>
		</Screen>
	)
}
