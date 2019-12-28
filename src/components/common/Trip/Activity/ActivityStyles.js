import styled from "styled-components/macro";
import { colors, merriweather } from "styles/css-variables";

/* Global Activity Styles */
export const Card = styled.div`
  transition: 0.2s ease-in;
  height: auto;
  width: 100%;
  border-radius: 6px;
  background: ${colors.white};
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin: 36px auto;
  padding: 24px;
  padding-top: 0;
  margin-top: 0;
  border-bottom: solid 4px ${colors.yellow};
`;

export const Container = styled.div``;
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  overflow: hidden;
  margin-top: -6px;
  margin-bottom: 24px;
  border-radius: 6px;
  bottom: 7px;
  padding: 16px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0);
  background: ${colors.white};
`;

export const Name = styled.div`
  color: ${colors.black};
  font-weight: 800;
  font-size: 1.25rem;
  font-family: ${merriweather};
`;

export const Time = styled.div`
  color: ${colors.red};
  font-size: 1rem;
  font-weight: 700;
`;
/* Food Styles */

/* Fuel Styles */

/* Transportation Styles */

/* Lodging Styles */
