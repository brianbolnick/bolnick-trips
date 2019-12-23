import styled from "styled-components/macro";
import { colors } from "styles/css-variables";

export const DayNumber = styled.div``;

export const Date = styled.div`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const ActivitiesContainer = styled.div``;
export const ActivityMarker = styled.div`
  margin-right: 16px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${colors.gray};
`;
export const Line = styled.div`
  width: 2px;
  background: ${colors.gray};
  height: 100%;
`;

export const ActivityGroup = styled.div`
  display: flex;
`;
