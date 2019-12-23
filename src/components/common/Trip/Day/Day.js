import React from "react";
import {
  Date,
  ActivitiesContainer,
  ActivityGroup,
  ActivityMarker,
  Circle,
  Line
} from "./DayStyles";
import Activity from "../Activity";

const Day = ({ day }) => {
  const { activities, date } = day;

  const renderActivities = () => {
    return activities.map((activity, index) => (
      <ActivityGroup>
        <ActivityMarker>
          <Circle />
          <Line />
        </ActivityMarker>
        <Activity key={`activity${index}`} activity={activity} />
      </ActivityGroup>
    ));
  };

  return (
    <div>
      <Date>{date}</Date>
      <ActivitiesContainer>{renderActivities()}</ActivitiesContainer>
    </div>
  );
};

export default Day;
