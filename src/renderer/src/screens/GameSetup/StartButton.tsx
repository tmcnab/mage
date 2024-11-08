import { GameStartOptions } from "@renderer/types/GameStartOptions"
import UIButton from "@renderer/components/UIButton"

export interface StartButtonProps {
	options: GameStartOptions
}

export default function StartButton ({options}: StartButtonProps) {
	const label = `${options.year} ${options.nation} start`
	
	const search = new URLSearchParams()
	search.set('year', options.year.toString())
	search.set('nation', options.nation)

	const url = `/game?${search.toString()}`

	return <UIButton label={label} onClick={url} />
}