import { CSSProperties } from "react"

export interface UIButtonProps {
	onClick: () => void
	label?: string
	icon?: JSX.Element
}

const style: CSSProperties = {
	borderRadius: '0.25rem',
	borderWidth: 0,
	fontSize: '1rem',
	textTransform: 'uppercase',
}

export default function UIButton (props: UIButtonProps) : JSX.Element {
	const children = [
		props.icon || '',
		props.label || '',
	].join(' ')

	return <button children={children} onClick={props.onClick} style={style} />
}