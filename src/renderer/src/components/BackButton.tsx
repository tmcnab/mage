import { useNavigate } from "react-router-dom"
import UIButton from "./UIButton"

export default function BackButton () : JSX.Element {
	const navigate = useNavigate()
	const onClick = () => navigate(-1)

	return <UIButton icon={'◀️'} label='Back' onClick={onClick} />
}