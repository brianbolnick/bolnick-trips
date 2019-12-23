import React from "react";
import { Heading, Container } from "./ActivityStyles";

const Fuel = ({ activity }) => {
  return (
    <Container>
      <Heading>
        <div>{activity.location}</div>
        <div>{activity.startTime}</div>
      </Heading>
      <div>{activity.endTime}</div>
      <div>${activity.estimatedCost}</div>
    </Container>
  );
};

export default Fuel;
