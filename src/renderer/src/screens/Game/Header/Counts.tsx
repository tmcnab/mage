import { Boy, OilBarrel } from '@nine-thirty-five/material-symbols-react/sharp'
import Flex from "@renderer/components/Flex"

interface Item {
	icon: JSX.Element
	key: string
	name: string
	value: number
}

export default function Counts () : JSX.Element {
	const items: Item[] = [{
		icon: <Boy />,
		key: 'population',
		name: 'Population',
		value: 1.25e6,
	}, {
		icon: <OilBarrel />,
		key: 'fuel',
		name: 'Fuel',
		value: 1500,
	}]

	const children = items.map(item =>
		<div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }} title={item.name}>
			{item.icon}
		</div>
	)

	return <Flex children={children} />
}