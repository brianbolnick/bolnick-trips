import React from "react";
import styled from "styled-components/macro";
import { media } from "styles/css-variables";
import tripConfig from "./tripsConfig";
import TripCard from "components/common/TripCard";

const TripsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  height: 100%;

  ${media.smallDesktop`
		flex-flow: column;
		flex-wrap: wrap;
		width: 90%;
		margin: 84px auto;
	`};
`;

const Home = () => {
  const renderTrips = () => tripConfig.map(trip => <TripCard trip={trip} />);

  return <TripsContainer>{renderTrips()}</TripsContainer>;
};

export default Home;
