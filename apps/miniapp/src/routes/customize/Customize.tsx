import { useAppContext } from '@/AppContext'
import { Link } from 'react-router-dom'

export const CustomizePage = () => {
	const {
		user: {
			settings: { stylization },
		},
	} = useAppContext()

	console.log({ stylization })

	const handleChangeColor = (color: string, varName: string) => {
		document.documentElement.style.setProperty(`--${varName}`, color)
	}

	return (
		<>
			<Link to="/">BACK</Link>
			<div>Customize</div>

			<label htmlFor="accent color">Accent color</label>
			<input
				type="color"
				id="accent color"
				onChange={(e) => handleChangeColor(e.target.value, 'orange')}
			/>

			<label htmlFor="background color">Background color</label>
			<input type="color" id="background color" onChange={(e) => console.log(e.target.value)} />

			<label htmlFor="text color">Text color</label>
			<input type="color" id="text color" onChange={(e) => console.log(e.target.value)} />
		</>
	)
}
