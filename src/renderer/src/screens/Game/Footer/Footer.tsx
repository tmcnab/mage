import { CSSProperties } from "react"

const style: CSSProperties = {
	bottom: 0,
	display: 'flex',
	justifyContent: 'space-between',
	padding: '1rem',
	position: 'absolute',
	width: '100vw',
}

export default function Footer(): JSX.Element {
	return (
		<footer style={style}>
			<div>Shortcuts</div>
			<div>Map Controls</div>
		</footer>
	)
}