import React from 'react'

function MySelect({ options, defaultValue, onChange, value }) {
	return (
		<select
			className="sort"
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option key={defaultValue} value="" disabled>{defaultValue}</option>
			{
				options.map(option =>
					<option key={option.value} value={option.value}>{option.name}</option>
				)
			}
		</select >
	)
}

export default MySelect
