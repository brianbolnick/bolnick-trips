import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 64px 0;
`;
const ChildrenContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Layout;
