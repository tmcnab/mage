import Facets from "./Facets/Facets";

export default function Header () : JSX.Element {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
			<Facets />
			<div>Information</div>
			<div>Controls</div>
		</header>
	)
}