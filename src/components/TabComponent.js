import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TabComponent() {
  return (
    <div>
      <Tabs className="tabs">
        <TabList className="tab-nav-container">
          <Tab>Question 1</Tab>
          <Tab>Question 2</Tab>
          <Tab>Question 3</Tab>
          <Tab>Question 4</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;
