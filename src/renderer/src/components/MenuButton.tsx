import { CSSProperties } from "react"
import { useNavigate } from 'react-router-dom'

export interface MenuButtonProps {
	disabled?: boolean
	label?: string
	onClick: string | (() => void)
}

const onClickWarning = () => {
	console.warn('you need to provide an onClick handler')
}

export default function MenuButton (props: MenuButtonProps) : JSX.Element {
	const navigate = useNavigate()

	const {
		disabled,
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


const style: CSSProperties = {
	backgroundColor: 'ButtonFace',
	borderColor: 'ButtonText',
	borderRadius: '0.25rem',
	borderStyle: 'groove',
	borderWidth: 1,
	color: disabled ? 'GrayText' : 'ButtonText',
	cursor: disabled ? 'not-allowed' : 'pointer',
	fontFamily: 'monospace',
	fontSize: '1rem',
	padding: '0.5rem',
}

	return <button children={children} disabled={disabled} onClick={onClickFn} style={style} />
}