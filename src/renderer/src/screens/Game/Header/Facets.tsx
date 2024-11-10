import {
	Factory,
	Gavel, 
	Handshake,
	LocalShipping,
	MilitaryTech,
} from '@nine-thirty-five/material-symbols-react/sharp'

export default function Facets () : JSX.Element {
	return (
		<div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
			<Gavel title='Laws' />
			<Handshake />
			<MilitaryTech />
			<Factory />
			<LocalShipping />
		</div>
	)
}