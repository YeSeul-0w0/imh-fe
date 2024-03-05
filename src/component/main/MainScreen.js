import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import dummy from "../../static/cafe_list.json"; // 더미 데이터
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Calendar from "./Calendar";
import List from "./List";
import { AddIcon } from "@chakra-ui/icons";
function MainScreen() {
  const today = new Date();

  return (
    <div>
      <Box display="grid" gridGap={2} gridAutoFlow="column" margin="2%">
        <Heading as="h2" size="xl">
          {today.getMonth() + 1}월
        </Heading>
        <Flex justifyContent="flex-end">
          <IconButton
            isRound={true}
            size="sm"
            variant="outline"
            colorScheme="teal"
            icon={<AddIcon />}
          />
        </Flex>
      </Box>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>List</Tab>

          <Tab>Calendar</Tab>
        </TabList>

        <TabPanels>
          <TabPanel style={{ height: "100vh" }}>
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
