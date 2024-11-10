import { CSSProperties } from 'react'
import DiplomacyButton from '../controls/DiplomacyButton'
import Flex from '@renderer/components/Flex'
import LawsButton from '../controls/LawsButton'
import LogisticsButton from '../controls/LogisticsButton'
import ManufacturingButton from '../controls/ManufacturingButton'
import MilitaryButton from '../controls/MilitaryButton'

const style: CSSProperties = {
	backgroundColor: 'gray',
	borderBottomLeftRadius: '0.5rem',
	borderBottomRightRadius: '0.5rem',
	padding: '0.5rem',
} 

export default function Center () : JSX.Element {
	return (
		<div style={style}>
			<Flex gap='small'>
				<LawsButton />
				<DiplomacyButton />
				<MilitaryButton />
				<ManufacturingButton />
				<LogisticsButton />
			</Flex>
		</div>
	)
}