import { CSSProperties, ReactNode } from "react"

export interface WindowProps {
	children: ReactNode
	title: string
}

const frameStyle: CSSProperties = {
	backgroundColor: 'darkgray',
	borderRadius: '0.25rem',
	height: '40vh',
	position: 'absolute',
	width: '20vw',
	left: '40vw',
	top: '30vh',
}

export default function Window(props: WindowProps): JSX.Element {
	return (
		<div style={frameStyle}>
			<header style={{ textAlign: 'center' }}>
				<strong>{props.title}</strong>
			</header>
			<div style={{ padding: '1rem' }}>
				{props.children}
			</div>
			<footer style={{ bottom: 0, padding: '0.5rem', position: 'absolute', width: '100%' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button>Back</button>
					<button>Save</button>
				</div>
			</footer>
		</div>
	)
}