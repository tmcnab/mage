import { CSSProperties } from "react"
import { useNavigate } from "react-router-dom"

export interface UIButtonProps {
	icon?: JSX.Element
	label?: string
	onClick: () => void | string
}

const style: CSSProperties = {
	borderRadius: '0.25rem',
	borderWidth: 0,
	fontSize: '1rem',
	textTransform: 'uppercase',
}

export default function UIButton (props: UIButtonProps) : JSX.Element {
	const navigate = useNavigate()

	const children = [
		props.icon || '',
		props.label || '',
	].join(' ')

	const onClick = () => {
		if (typeof props.onClick === 'string') {
			navigate(props.onClick)
		} else {
			props.onClick()
		}
	}

	return <button children={children} onClick={onClick} style={style} />
}