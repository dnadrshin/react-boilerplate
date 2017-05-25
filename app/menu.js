import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => <div>
	<ul>
		<li><Link to={'/'}>main</Link></li>
		<li><Link to={'/settings'}>settings</Link></li>
		<li><Link to={'/chat'}>chat</Link></li>
		<li><Link to={'/github'}>GitHub</Link></li>
	</ul>
</div>

export default Menu
