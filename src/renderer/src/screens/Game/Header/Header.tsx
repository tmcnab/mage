import { CSSProperties } from "react"
import Center from "./Center"
import Left from "./Left"
import Right from "./Right"

const style: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	position: 'absolute',
	top: 0,
	width: '100vw',
}

export default function Header () : JSX.Element {
	return (
		<header style={style}>
			<Left />
			<Center />
			<Right />
		</header>
	)
}