import Flex from "@renderer/components/Flex"
import MenuButton from "@renderer/components/MenuButton"
import Screen from "@renderer/components/Screen"

export default function MainMenuScreen(): JSX.Element {
	return (
		<Screen>
			<Flex>
				<div />
				<Flex gap='medium' orientation='vertical'>
					<MenuButton label='Start' />
					<MenuButton label='Load' />
					<MenuButton label='Options' onClick='/options' />
					<MenuButton label='Credits' />
					<MenuButton label='Exit' />
				</Flex>
				<div />
			</Flex>
		</Screen>
	)
}
