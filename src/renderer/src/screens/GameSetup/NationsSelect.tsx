import { useMemo, useState } from "react"
import Flex from "@renderer/components/Flex"
import NationButton from "./NationButton"

export interface NationSelectProps {
	onChange: (value: string) => void,
	year: number,
}

const descriptions = [{
	description: 'The United States of America is a diverse and influential federal republic composed of 50 states, known for its democratic principles, economic power, and global cultural impact.',
	id: 'usa',
}, {
	description: 'The Federal Republic of Germany is a democratic, federal country in Central Europe, known for its strong economy, rich cultural heritage, and commitment to political stability and European unity.',
	id: 'ger',
}, {
	description: 'The French Republic is a democratic nation in Western Europe, renowned for its rich history, cultural influence, and commitment to liberty, equality, and fraternity.',
	id: 'fra'
}, {
	description: 'The United Kingdom of Great Britain and Northern Ireland is a constitutional monarchy and parliamentary democracy, known for its historical global influence, cultural contributions, and diverse society.',
	id: 'gbr',
}, {
	description: 'Spain is a diverse and vibrant country in Southern Europe, known for its rich history, cultural heritage, and influential contributions to art, architecture, and cuisine.',
	id: 'esp'
}, {
	description: 'The Russian Federation is the largest country in the world, spanning Eastern Europe and northern Asia, with a rich history, significant geopolitical influence, and a complex political and cultural landscape.',
	id: 'rus'
}]

export default function NationSelect(props: NationSelectProps): JSX.Element {
	const [id, setId] = useState<string>('usa')
	
	useMemo(() => {
		props.onChange(id)
	}, [id])

	return (
		<div>
			<Flex>
			{descriptions.map(item => 
				<NationButton id={item.id} key={item.id} selected={item.id === id} onClick={() => setId(item.id)} />
			)}
			</Flex>
			<p style={{ marginTop: '0.5rem' }}>{descriptions.find(i => i.id === id)?.description}</p>
		</div>
	)
}