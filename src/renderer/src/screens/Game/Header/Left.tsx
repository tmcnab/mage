import { CSSProperties } from "react"
import Counts from "../controls/CountsControl"

const style: CSSProperties = {
	backgroundColor: 'grey',
	borderBottomRightRadius: '0.5rem',
	padding: '0.5rem',
}

export default function Left(): JSX.Element {
	return (
		<div style={style}>
			<Counts />
		</div>
	)
}