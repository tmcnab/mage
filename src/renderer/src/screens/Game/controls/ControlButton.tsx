export interface ControlButtonProps {
	icon: JSX.Element
	key: string
	onClick: (string) => void
	title: string
}

export default function ControlButton ($props: ControlButtonProps) : JSX.Element {
	const props = {
		children: $props.icon,
		key: $props.key,
		onClick: $props.onClick,
		style: { cursor: 'pointer' },
		title: $props.title,
	}

	return <div {...props} />
}