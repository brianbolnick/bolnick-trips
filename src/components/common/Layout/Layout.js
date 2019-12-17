import React from 'react'
import styled from 'styled-components/macro';

const Container = styled.div``;
const ChildrenContainer = styled.div``;

const NavBar = () => {
	return <div>nav</div>
}

const Footer = () => {
	return <div>footer</div>
}

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />

			<ChildrenContainer>
				{children}
			</ChildrenContainer>

			<Footer />
		</Container>
	)
}

export default Layout
