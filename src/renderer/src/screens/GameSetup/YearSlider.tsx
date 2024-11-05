import { ChangeEventHandler } from "react"
import { times } from 'lodash'

export interface YearSliderProps {
	onChange: (value: number) => void,
}

export default function YearSlider(props: YearSliderProps): JSX.Element {
	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const value = Number(event.target.value)
		props.onChange(value)
	}

	const min = 1760
	const max = 2030
	const step = 5
	const periods = (max - min) / 5

	return (
		<div>
			<input max={max} min={min} onChange={onChange} step={step} style={{ width: '100%' }} type='range' />
			<table style={{ width: '100%' }}>
				<thead>
					<tr>
						{times(periods, (key) => <th key={key} style={{ borderLeft: '1px solid black' }} />)}
					</tr>
				</thead>
				<tbody>
					<tr style={{ textAlign: 'center' }}>
						<td colSpan={(1880 - 1760) / 5} style={{ backgroundColor: 'red' }}>IND</td>
						<td colSpan={(1945 - 1880) / 5} style={{ backgroundColor: 'green' }}>MAC</td>
						<td colSpan={(1990 - 1945) / 5} style={{ backgroundColor: 'grey' }}>SPC</td>
						<td colSpan={(2030 - 1990) / 5} style={{ backgroundColor: 'blue' }}>INF</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}