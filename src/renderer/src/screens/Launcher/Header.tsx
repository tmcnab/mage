import Flex from '@renderer/components/Flex'
import MenuButton from '@renderer/components/MenuButton'

export default function Header () {
	return (
		<header style={{ padding: '1rem' }}>
			<Flex>
				<h1>MaGE</h1>
				<MenuButton label='GH' />
			</Flex>
		</header>
	)
}