import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

const style: CSSProperties = {
	borderRadius: '0.25rem',
	borderWidth: 1,
	backgroundColor: 'ButtonFace',
}

export interface ButtonProps {
	onClick: string | (() => void)
	label: string
}

export default function Button (props: ButtonProps) : JSX.Element {
	const navigate = useNavigate()

	const children = props.label

	const onClick = () => {
		if (typeof props.onClick === 'string') {
			navigate(props.onClick)
		} else {
			props.onClick()
		}
	}

	return <button children={children} onClick={onClick} style={style} />
}