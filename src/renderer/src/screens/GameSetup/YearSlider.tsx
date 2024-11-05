import Flex from "@renderer/components/Flex"
import { ChangeEventHandler } from "react"

export interface YearSliderProps {
	onChange: (value: number) => void,
}

export default function YearSlider(props: YearSliderProps): JSX.Element {
	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const value = Number(event.target.value)
		props.onChange(value)
	}

	return (
		<div>
			<input max={2025} min={1760} onChange={onChange} step={5} style={{ width: '100%' }} type='range' />
			<Flex>
				<span>Industrial</span>
				<span>Machine</span>
				<span>Nuclear/Space</span>
				<span>Information</span>
			</Flex>
		</div>
	)
}