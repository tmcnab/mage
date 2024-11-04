import { CSSProperties, ReactNode } from 'react'


const gapToValue = (input: undefined | 'small' | 'medium' | 'large') => {
	return input ? ({
		 ['small']: '0.5rem',
		['medium']: '1.0rem',
		 ['large']: '2.0rem',
	})[input] : undefined
}

export interface FlexProps {
	children: ReactNode,
	gap?: 'small' | 'medium' | 'large',
	orientation?:'horizontal' | 'vertical',
}

export default function Flex ({ children, gap, orientation = 'horizontal' }: FlexProps) : JSX.Element {
	const style: CSSProperties = {
		display: 'flex',
		flexDirection: orientation === 'horizontal' ? 'row' : 'column',
		gap: gapToValue(gap),
		justifyContent: 'space-between',
	}

	return <div children={children} style={style} />
}