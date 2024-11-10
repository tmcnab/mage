import { Menu } from '@nine-thirty-five/material-symbols-react/sharp'
import TimeControl from './TimeControl'
import Alerts from './Alerts'

export default function Controls () : JSX.Element {
	return (
		<div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
			<TimeControl />
			<Alerts />
			<Menu />
		</div>
	)
}