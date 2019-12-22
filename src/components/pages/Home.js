import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { colors } from "styles/css-variables";

const linkCss = css`
  text-decoration: none;
  color: ${colors.black};
`;
const SiteLink = styled(Link)`
  ${linkCss};
`;

const SiteAnchor = styled.a`
  ${linkCss};
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SitesContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const Home = () => {
  return (
    <Layout>
      <SitesContainer>
        <SiteAnchor
          href="//our-europe-trip.herokuapp.com"
          target="_blank"
          rel="noopener"
        >
          EUROPE 2018
        </SiteAnchor>
        <SiteLink to="/disneyland20">DISNEYLAND 2020</SiteLink>
      </SitesContainer>
    </Layout>
  );
};

export default Home;
