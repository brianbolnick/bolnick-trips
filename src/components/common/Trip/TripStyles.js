import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { media, colors } from "styles/css-variables";

export const TripDetails = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  color: ${colors.white};
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Dates = styled.div`
  color: #bcb0aa;
  font-size: 1rem;
`;

export const Description = styled.div`
  color: ${colors.white};
`;

export const NavContainer = styled.div``;
export const TabItem = styled.div``;
export const TabItems = styled.div`
  display: flex;
  margin: 32px auto;
  justify-content: space-around;
  width: 50%;
  ${media.phone`
		flex-wrap: wrap;
	`};
`;

export const HomeLink = styled(Link)`
  color: ${colors.white};
`;
