import { CSSProperties, ReactNode } from "react"

export interface WindowProps {
	children: ReactNode
	title: string
	width?: number
}

export default function Window(props: WindowProps): JSX.Element {
	const width = props.width || 20

	const frameStyle: CSSProperties = {
		backgroundColor: 'darkgray',
		borderRadius: '0.25rem',
		minHeight: '40vh',
		position: 'absolute',
		width: `${width}vw`,
		left: `${(100 - width) / 2}vw`,
		top: '30vh',
	}

	return (
		<div style={frameStyle}>
			<header style={{ textAlign: 'center' }}>
				<span style={{ fontWeight: 'bold' }}>{props.title}</span>
			</header>
			<div style={{ height: '100%', padding: '1rem' }}>
				{props.children}
			</div>
		</div>
	)
}