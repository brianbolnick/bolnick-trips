import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { media, titan, colors } from "styles/css-variables";

const cardCSS = css`
  text-decoration: none;
`;

export const LinkWrapper = styled(Link)`
  ${cardCSS}
`;

export const AnchorWrapper = styled.a`
  ${cardCSS}
`;

export const Card = styled.div`
  transition: 0.2s ease-in;
  height: 400px;
  width: 300px;
  border-radius: 6px;
  background: ${colors.white};
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.2s;
    transform: translateY(-6px);
  }
`;

export const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
  bottom: 30px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0);
`;

export const DetailsContainer = styled.div`
  padding: 15px 30px;
  padding-top: 0;
`;

export const Dates = styled.div`
  color: ${colors.red};
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Title = styled.div`
  color: ${colors.black};
  margin-top: 5px;
  font-weight: 700;
  font-size: 1.3em;
  line-height: 1.55em;
`;

export const Description = styled.div`
  color: ${colors.black};
  margin: 10px 0;
`;
