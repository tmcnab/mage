import { MilitaryTech } from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from "react"
import ControlButton from "./ControlButton"

export default function MilitaryButton () : JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<>
			<ControlButton icon={<MilitaryTech />} key='feature-military' onClick={() => setVisible(!visible)} title='Military'  />
		</>
	)
}