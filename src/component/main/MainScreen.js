import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import dummy from "../../static/cafe_list.json"; // 더미 데이터
import Calendar from "./Calendar";
import List from "./List";
import { useNavigate } from "react-router-dom";

function MainScreen() {
  const today = new Date();
  const navigate = useNavigate();

  const moveForm = () => navigate(`./register_cafe_info`);

  return (
    <div>
      <Box display="grid" gridGap={2} gridAutoFlow="column" margin="2%">
        <Heading as="h2" size="xl">
          {today.getMonth() + 1}월
        </Heading>
        <Flex justifyContent="flex-end">
          <IconButton
            id="main-screen-add"
            onClick={moveForm}
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
