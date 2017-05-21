import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => <div>
	<ul>
		<li><Link to={'/'}>main</Link></li>
		<li><Link to={'/settings'}>settings</Link></li>
		<li><Link to={'/chat'}>chat</Link></li>
	</ul>
</div>

export default Menu
