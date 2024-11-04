import { CSSProperties, ReactNode } from "react"

const style: CSSProperties = {
	height: '100vh',
	width: '100vw',
}

export interface ScreenProps {
	children: ReactNode
}

export default function Screen({ children }: ScreenProps) : JSX.Element {
	return <div children={children} style={style} />
}