import { LocalShipping } from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from "react"
import ControlButton from "./ControlButton"

export default function LogisticsButton () : JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<>
			<ControlButton icon={<LocalShipping />} key='feature-logistics' onClick={() => setVisible(!visible)} title='Logistics'  />
		</>
	)
}