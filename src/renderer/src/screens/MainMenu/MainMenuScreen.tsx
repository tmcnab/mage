import Flex from "@renderer/components/Flex"
import MenuButton from "@renderer/components/MenuButton"
import Screen from "@renderer/components/Screen"
import Window from "@renderer/components/Window"

export default function MainMenuScreen(): JSX.Element {
	return (
		<Screen>
			<Window title='MaGE'>
				<Flex gap='medium' orientation='vertical'>
					<MenuButton label='Start' onClick='/game-setup' />
					<MenuButton disabled label='Load' />
					<MenuButton label='Options' onClick='/options' />
					<MenuButton label='Credits' onClick='/credits' />
					<MenuButton disabled label='Exit' />
				</Flex>
			</Window>
		</Screen>
	)
}
