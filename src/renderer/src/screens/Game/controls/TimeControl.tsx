import {
	ChevronBackward,
	ChevronForward,
	FirstPage,
	LastPage,
	PlayArrow,
	Pause,
} from '@nine-thirty-five/material-symbols-react/sharp'
import { useState } from 'react'
import ControlButton from './ControlButton'
import Flex from '@renderer/components/Flex'

export default function TimeControl(): JSX.Element {
	const [paused, setPaused] = useState(false)

	const onClick = (key: string) => {
		console.log('TimeControl', key)
	}

	return (
		<Flex>
			<ControlButton icon={<FirstPage />} key='time-set-min' onClick={onClick} title='Slowest' />
			<ControlButton icon={<ChevronBackward />} key='time-decrease' onClick={onClick} title='Decrease' />
			<ControlButton icon={paused ? <Pause /> : <PlayArrow />} key='time-toggle' onClick={onClick} title={paused ? 'Paused' : 'Playing'} />
			<ControlButton icon={<ChevronForward />} key='time-increase' onClick={onClick} title='Increase' />
			<ControlButton icon={<LastPage />} key='time-set-max' onClick={onClick} title='Maximum' />
		</Flex>
	)
}