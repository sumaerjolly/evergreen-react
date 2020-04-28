import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import TabContentFour from './TabContentFour';

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
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
        <TabPanel>
          <TabContentThree />
        </TabPanel>
        <TabPanel>
          <TabContentFour />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;
