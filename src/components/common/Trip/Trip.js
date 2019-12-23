import React, { useState } from "react";
import Layout from "components/common/Layout";
import { Tabs, Tab, TabPane } from "components/common/Tabs";
import {
  NavContainer,
  TripDetails,
  Title,
  Dates,
  Description,
  TabItem,
  TabItems
} from "./TripStyles";
import Day from "./Day";

const DEFAULT_TAB = "day1";

const Trip = ({ trip }) => {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const renderTabs = () => {
    return trip.itinerary.map((_day, index) => {
      return (
        <Tab name={`day${index + 1}`}>
          <TabItem>Day {index + 1}</TabItem>
        </Tab>
      );
    });
  };

  const renderTabPanes = () => {
    return trip.itinerary.map((day, index) => {
      return (
        <TabPane name={`day${index + 1}`}>
          <Day day={day} />
        </TabPane>
      );
    });
  };

  return (
    <Layout>
      <NavContainer>
        <Tabs
          defaultActiveTab={activeTab}
          onTabChange={tab => setActiveTab(tab)}
        >
          <TripDetails>
            <Title>{trip.name}</Title>
            <Dates>{trip.dates}</Dates>
            <Description>{trip.description}</Description>
          </TripDetails>
          <TabItems>{renderTabs()}</TabItems>
          {renderTabPanes()}
        </Tabs>
      </NavContainer>
    </Layout>
  );
};

export default Trip;
