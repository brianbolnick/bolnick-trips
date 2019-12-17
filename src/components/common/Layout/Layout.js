import React from 'react'
import styled from 'styled-components/macro';
import NavBar from 'components/common/NavBar'

const Container = styled.div``;
const ChildrenContainer = styled.div``;

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
