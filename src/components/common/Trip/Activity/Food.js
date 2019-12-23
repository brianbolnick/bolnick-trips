import React from "react";
import { Container, Heading } from "./ActivityStyles";

const Food = ({ activity }) => {
  return (
    <Container>
      <Heading>
        <div>{activity.name}</div>
        <div>{activity.startTime}</div>
      </Heading>
      <div>{activity.restaurant}</div>
      <div>{activity.location}</div>
      <div>${activity.estimatedCost}</div>
    </Container>
  );
};

//<div>{activity.endTime}</div>
export default Food;
