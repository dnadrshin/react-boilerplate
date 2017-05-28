//@flow
import React from 'react'

const
	InnerComponent = (props: {
		increase?: () => {}
	}) => <div>
		<button onClick={props.increase}>Async get-set</button>
	</div>

export default InnerComponent
