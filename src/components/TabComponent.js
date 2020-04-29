import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import TabContentFour from './TabContentFour';

function TabComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Tabs
        className="tabs"
        selectedIndex={tabIndex}
        onSelect={tabIndex => setTabIndex(tabIndex)}
      >
        <TabList className="tab-nav-container">
          <Tab className={`${tabIndex === 0 ? 'tab-selected active' : null}`}>
            Question 1
          </Tab>
          <Tab className={`${tabIndex === 1 ? 'tab-selected active' : null}`}>
            Question 2
          </Tab>
          <Tab className={`${tabIndex === 2 ? 'tab-selected active' : null}`}>
            Question 3
          </Tab>
          <Tab className={`${tabIndex === 3 ? 'tab-selected active' : null}`}>
            Question 4
          </Tab>
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
