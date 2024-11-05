import { CSSProperties, ReactNode } from "react"

export interface WindowProps {
	children: ReactNode
	title: string

}

const frameStyle: CSSProperties = {
	backgroundColor: 'darkgray',
	borderRadius: '0.25rem',
	minHeight: '40vh',
	position: 'absolute',
	width: '20vw',
	left: '40vw',
	top: '30vh',
}

export default function Window(props: WindowProps): JSX.Element {
	return (
		<div style={frameStyle}>
			<header style={{ fontWeight: 'bold', textAlign: 'center' }}>
				<strong>{props.title}</strong>
			</header>
			<div style={{ height: '100%', padding: '1rem' }}>
				{props.children}
			</div>
		</div>
	)
}