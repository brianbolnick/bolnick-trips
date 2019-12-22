import styled from "styled-components/macro";
import { media, titan } from "styles/css-variables";

export const NavContainer = styled.div``;
export const TabItem = styled.div`
  color: #6dd5ed;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: ${titan};

  ${({ active }) =>
    !active &&
    `
			&:hover {
				color: #fe5f55;
			}
		`};
`;
export const TabItems = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 50%;

  ${media.phone`
		flex-wrap: wrap;
	`};
`;
