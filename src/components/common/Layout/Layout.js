import React from "react";
import styled from "styled-components/macro";

const Container = styled.div``;
const ChildrenContainer = styled.div``;
const Layout = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Layout;
