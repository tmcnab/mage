import Flex from "@renderer/components/Flex"
import { CSSProperties } from "react"

export interface NationButtonProps {
	id: string
	onClick: () => void
	selected: boolean
}

const idToString = (id: string): string => {
	return ({
		'esp': '🇪🇸',
		'fra': '🇫🇷',
		'gbr': '🇬🇧',
		'ger': '🇩🇪',
		'rus': '🇷🇺',
		'usa': '🇺🇸',
	})[id]
}

export default function NationButton (props: NationButtonProps) : JSX.Element {
	const style: CSSProperties = {
		borderWidth: 0,
		backgroundColor: props.selected ? 'white' : 'lightgrey',
		padding: '0.5rem',
	}

	return (
		<button onClick={props.onClick} style={style}>
			<Flex orientation='vertical'>
				<div>{idToString(props.id)}</div>
				<div>{props.id.toUpperCase()}</div>
			</Flex>
		</button>
	)
}