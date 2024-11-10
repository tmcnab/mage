import { Factory } from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from "react"
import ControlButton from "./ControlButton"

export default function ManufacturingButton () : JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<>
			<ControlButton icon={<Factory />} key='feature-military' onClick={() => setVisible(!visible)} title='Manufacturing'  />
		</>
	)
}