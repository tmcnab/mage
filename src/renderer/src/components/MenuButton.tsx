import { CSSProperties } from "react"

export interface MenuButtonProps {
	label?: string
}

export default function MenuButton (props: MenuButtonProps) : JSX.Element {
	const children = props.label
	const style: CSSProperties = {
		backgroundColor: 'ButtonFace',
		borderColor: 'ButtonText',
		borderRadius: '0.25rem',
		borderStyle: 'groove',
		borderWidth: 1,
		color: 'ButtonText',
		fontSize: '1rem',
		padding: '0.5rem',
	}

	return <button children={children} style={style} />
}