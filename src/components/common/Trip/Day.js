import React from "react";
import { Card, DayNumber, Date, ActivitiesContainer } from "./DayStyles";
import Activity from "./Activity";

const Day = ({ day }) => {
  const { activities, name, date } = day;

  const renderActivities = () => {
    return activities.map(activity => <Activity activity={activity} />);
  };

  return (
    <Card>
      <DayNumber>{name}</DayNumber>
      <Date>{date}</Date>
      <ActivitiesContainer>{renderActivities()}</ActivitiesContainer>
    </Card>
  );
};

export default Day;
