import React from "react";
import { Date, ActivitiesContainer } from "./DayStyles";
import Activity from "./Activity";

const Day = ({ day }) => {
  const { activities, date } = day;

  const renderActivities = () => {
    return activities.map(activity => <Activity activity={activity} />);
  };

  return (
    <div>
      <Date>{date}</Date>
      <ActivitiesContainer>{renderActivities()}</ActivitiesContainer>
    </div>
  );
};

export default Day;
