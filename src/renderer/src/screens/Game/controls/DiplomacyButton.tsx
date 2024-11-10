import { Handshake } from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from "react"
import ControlButton from "./ControlButton"

export default function DiplomacyButton () : JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<>
			<ControlButton icon={<Handshake />} key='feature-diplomacy' onClick={() => setVisible(!visible)} title='Diplomacy'  />
		</>
	)
}