import styled from "styled-components/macro";
import { media, colors } from "styles/css-variables";

export const TripDetails = styled.div``;

export const Title = styled.div`
  color: ${colors.white};
`;

export const Dates = styled.div`
  color: ${colors.white};
`;

export const Description = styled.div`
  color: ${colors.white};
`;

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
