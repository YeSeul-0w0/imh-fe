import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import React from "react";
import dummy from "../../static/cafe_list.json"; // 더미 데이터
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Calendar from "./Calendar";
import List from "./List";
function MainScreen() {
  const today = new Date();

  return (
    <div>
      <Heading as="h2" size="xl">
        {today.getMonth() + 1}월
      </Heading>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>List</Tab>
          <Tab>Calendar</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <List cafes={dummy} />
          </TabPanel>
          <TabPanel>
            <Calendar />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default MainScreen;
