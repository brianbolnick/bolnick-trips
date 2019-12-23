import React from "react";
import { Card } from "./ActivityStyles";
import Food from "./Food";
import Transportation from "./Transportation";
import Fuel from "./Fuel";
import Lodging from "./Lodging";

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
