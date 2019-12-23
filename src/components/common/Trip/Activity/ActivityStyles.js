import styled from "styled-components/macro";
import { colors } from "styles/css-variables";

/* Global Activity Styles */
export const Card = styled.div`
  transition: 0.2s ease-in;
  height: auto;
  width: 100%;
  border-radius: 6px;
  background: ${colors.white};
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin: 16px auto;
  padding: 24px;
  margin-top: 0;
  border-bottom: solid 4px ${colors.yellow};
`;

export const Container = styled.div``;
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Food Styles */

/* Fuel Styles */

/* Transportation Styles */

/* Lodging Styles */
