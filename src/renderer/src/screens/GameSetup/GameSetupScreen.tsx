import { GameStartOptions } from "@renderer/types/GameStartOptions"
import { useState } from "react"
import BackButton from "@renderer/components/BackButton"
import Flex from "@renderer/components/Flex"
import NationSelect from "./NationsSelect"
import Screen from "@renderer/components/Screen"
import StartButton from "./StartButton"
import Window from "@renderer/components/Window"
import YearSlider from "./YearSlider"

export default function GameSetupScreen(): JSX.Element {
	const [options, setOptions] = useState<GameStartOptions>({
		hardcore: false,
		nation: 'usa',
		year: 1935,
	})

	const setValue = (name, value) =>
		setOptions({ ...options, [name]: value })
	
	return (
		<Screen>
			<Window title='Game Setup' width={60}>
				<Flex gap='large' orientation='vertical'>
					<NationSelect onChange={(value) =>setValue('nation', value)} year={options.year} />
					<YearSlider onChange={(value) => setValue('year', value)} />
					<Flex>
						<BackButton />
						<StartButton options={options} />
					</Flex>
				</Flex>
			</Window>
		</Screen>
	)
}
