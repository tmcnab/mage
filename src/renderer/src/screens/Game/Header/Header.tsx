import Controls from "./Controls"
import Counts from "./Counts"
import Facets from "./Facets"

export default function Header () : JSX.Element {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
			<Counts />
			<Facets />
			<Controls />
		</header>
	)
}