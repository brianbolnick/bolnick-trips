import React, { useState } from "react";
import Layout from "components/common/Layout";
import { Tabs, Tab, TabPane } from "components/common/Tabs";
import { NavContainer, TabItem, TabItems } from "./TripStyles";

const ITINERARY = "ITINERARY";
const BUDGET = "BUDGET";

const Trip = ({ trip }) => {
  const [activeTab, setActiveTab] = useState(ITINERARY);

  return (
    <Layout>
      <NavContainer>
        <Tabs
          defaultActiveTab={activeTab}
          onTabChange={tab => setActiveTab(tab)}
        >
          <TabItems>
            <Tab name={ITINERARY}>
              <TabItem active={activeTab === ITINERARY}>Itinerary</TabItem>
            </Tab>
            <Tab name={BUDGET}>
              <TabItem active={activeTab === BUDGET}>Budget</TabItem>
            </Tab>
          </TabItems>
          <TabPane name={ITINERARY}>itinerary</TabPane>
          <TabPane name={BUDGET}>budget</TabPane>
        </Tabs>
      </NavContainer>
    </Layout>
  );
};

export default Trip;
