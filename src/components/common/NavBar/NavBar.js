import React from 'react'
import {
	Container,
	Links,
	NavLink
} from './NavBarStyles'

const NavBar = () => {
	return (
		<Container>
			<div>Logo</div>
			<Links>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='sign_in'>Sign In</NavLink>
			</Links>
		</Container>
	)
}

export default NavBar
