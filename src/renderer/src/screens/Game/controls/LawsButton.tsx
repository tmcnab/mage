import { Gavel } from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from "react"
import ControlButton from "./ControlButton"

export default function LawsButton () : JSX.Element {
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<>
			<ControlButton icon={<Gavel />} key='feature-laws' onClick={() => setVisible(!visible)} title='Laws'  />
		</>
	)
}