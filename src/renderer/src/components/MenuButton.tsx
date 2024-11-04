import { CSSProperties } from "react"
import { useNavigate } from 'react-router-dom'

const style: CSSProperties = {
	backgroundColor: 'ButtonFace',
	borderColor: 'ButtonText',
	borderRadius: '0.25rem',
	borderStyle: 'groove',
	borderWidth: 1,
	color: 'ButtonText',
	fontFamily: 'monospace',
	fontSize: '1rem',
	padding: '0.5rem',
}

export interface MenuButtonProps {
	label?: string
	onClick: string | (() => void)
}

const onClickWarning = () => {
	console.warn('you need to provide an onClick handler')
}

export default function MenuButton (props: MenuButtonProps) : JSX.Element {
	const navigate = useNavigate()

	const {
		label,
		onClick = onClickWarning,
	} = props

	const children = label

	const onClickFn = () => {
		if (typeof onClick === 'string') {
			navigate(onClick)
		} else {
			onClick()
		}
	}

	return <button children={children} onClick={onClickFn} style={style} />
}