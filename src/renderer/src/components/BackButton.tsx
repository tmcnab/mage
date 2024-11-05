import { useNavigate } from "react-router-dom"
import Button from "./Button"

export default function BackButton () : JSX.Element {
	const navigate = useNavigate()
	const onClick = () => navigate(-1)

	return <Button label='Back' onClick={onClick} />
}