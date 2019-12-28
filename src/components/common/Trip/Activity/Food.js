import React from "react";
import { Container, Heading, Name, Time } from "./ActivityStyles";

const Food = ({ activity }) => {
  return (
    <Container>
      <Heading>
        <Name>{activity.name}</Name>
        <Time>{activity.startTime}</Time>
      </Heading>
      <div>{activity.restaurant}</div>
      <div>{activity.location}</div>
      <div>${activity.estimatedCost}</div>
    </Container>
  );
};

//<div>{activity.endTime}</div>
export default Food;
