//@flow
import React from 'react'

const
	InnerComponent = (props: {
		increase?: () => {}
	}) => <div>
		<button onClick={props.increase}>GET</button>
	</div>

export default InnerComponent
