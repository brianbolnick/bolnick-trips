import styled from "styled-components/macro";
import { media } from "styles/css-variables";

export const NavContainer = styled.div``;
export const TabItem = styled.div``;
export const TabItems = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 50%;

  ${media.phone`
		flex-wrap: wrap;
	`};
`;
