export interface ControlButtonProps {
	icon: JSX.Element
	key: string
	onClick: () => void
	title: string
}

export default function ControlButton (props: ControlButtonProps) : JSX.Element {
	return <div {...{ ...props, children: props.icon }} />
}