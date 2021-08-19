import React from 'react'

function MyButton(props) {
	return (
		<button {...props}>
			{props.children}
		</button>
	)
}

export default MyButton
