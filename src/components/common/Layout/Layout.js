import React from "react";
import styled from "styled-components/macro";
import { media } from "styles/css-variables";

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 64px 0;
`;
const ChildrenContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  ${media.phone`
		width: 90%;
	`};
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Layout;
