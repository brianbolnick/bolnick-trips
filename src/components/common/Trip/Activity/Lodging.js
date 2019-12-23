import React from "react";
import { Container } from "./ActivityStyles";

const Lodging = ({ activity }) => {
  return (
    <Container>
      <div>{activity.location}</div>
      <div>{activity.hotelName}</div>
      <div>${activity.estimatedCost}</div>
    </Container>
  );
};

export default Lodging;
