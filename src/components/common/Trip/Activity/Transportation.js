import React from "react";
import { Container } from "./ActivityStyles";

const Transportation = ({ activity }) => {
  return (
    <Container>
      <div>{activity.to}</div>
      <div>{activity.startTime}</div>
      <div>{activity.endTime}</div>
    </Container>
  );
};

export default Transportation;
