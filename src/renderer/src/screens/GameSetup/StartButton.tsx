import { GameStartOptions } from "@renderer/types/GameStartOptions"
import UIButton from "@renderer/components/UIButton"

export interface StartButtonProps {
	options: GameStartOptions
}

export default function StartButton ({options}: StartButtonProps) {
	const icon = options.hardcore ? '✊' : '✅'
	const label = `${icon} ${options.year} ${options.nation} start`

	return <UIButton label={label} onClick={() => {}} />
}