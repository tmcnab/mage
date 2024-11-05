import BackButton from "@renderer/components/BackButton"
import Flex from "@renderer/components/Flex"
import Screen from "@renderer/components/Screen"
import Window from "@renderer/components/Window"

export default function OptionsScreen(): JSX.Element {
	return (
		<Screen>
			<Flex orientation='vertical'>
				<Window title='Options'>
					<form>
						<Flex>
							<input name='pause-on-notifications' type='checkbox' />
							<span>Pause on Notifications</span>
						</Flex>
						<Flex>
							<input name='ui-scale' min={0.25} step={0.25} max={2} type='range' />
							<span>UI Scale</span>
						</Flex>
					</form>
					<BackButton />
				</Window>
			</Flex>
		</Screen>
	)
}
