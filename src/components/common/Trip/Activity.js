import React from "react";
import { Card, Container } from "./ActivityStyles";

const Food = ({ activity }) => {
  return (
    <Container>
      <div>{activity.name}</div>
      <div>{activity.startTime}</div>
      <div>{activity.endTime}</div>
      <div>{activity.restaurant}</div>
      <div>{activity.location}</div>
      <div>{activity.estimatedCost}</div>
    </Container>
  );
};

const Transportation = ({ activity }) => {
  return (
    <Container>
      <div>{activity.to}</div>
      <div>{activity.startTime}</div>
      <div>{activity.endTime}</div>
    </Container>
  );
};

const Fuel = ({ activity }) => {
  return <Container>FUEL</Container>;
};

const Lodging = ({ activity }) => {
  return <Container>Lodging</Container>;
};

const Activity = ({ activity }) => {
  const COMPONENT_MAPPINGS = {
    food: <Food activity={activity} />,
    transportation: <Transportation activity={activity} />,
    fuel: <Fuel activity={activity} />,
    lodging: <Lodging activity={activity} />
  };

  const DataCard = COMPONENT_MAPPINGS[activity.type];
  return <Card>{DataCard}</Card>;
};

export default Activity;
