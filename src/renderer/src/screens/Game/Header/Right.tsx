import { CSSProperties } from "react"
import Flex from "@renderer/components/Flex"
import MenuControl from "../controls/MenuControl"
import NotificationsControl from "../controls/NotificationsControl"
import TimeControl from "../controls/TimeControl"

const style: CSSProperties = {
	backgroundColor: 'grey',
	borderBottomLeftRadius: '0.5rem',
	padding: '0.5rem',
}

export default function Right(): JSX.Element {
	return (
		<div style={style}>
			<Flex gap='large'>
				<TimeControl />
				<NotificationsControl />
				<MenuControl />
			</Flex>
		</div>
	)
}