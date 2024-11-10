import { Menu } from '@nine-thirty-five/material-symbols-react/sharp'
import ControlButton from './ControlButton'

export default function MenuControl () : JSX.Element {
	return (
		<>
			<ControlButton icon={<Menu />} key='menu' onClick={() => {}} title='Menu' /> 
		</>
	)
}