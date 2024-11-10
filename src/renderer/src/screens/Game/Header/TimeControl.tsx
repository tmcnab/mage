import {
	ChevronBackward,
	ChevronForward,
	FirstPage,
	LastPage,
	PlayArrow,
} from '@nine-thirty-five/material-symbols-react/sharp'

export default function TimeControl () : JSX.Element {
	return (
		<div>
			<FirstPage />
			<ChevronBackward />
			<PlayArrow />
			<ChevronForward />
			<LastPage />
		</div>
	)

}