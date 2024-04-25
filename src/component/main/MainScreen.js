import React from "react";
import { Box, Container, Flex, Heading, IconButton } from "@chakra-ui/react";
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
    <Container>
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
      <Box>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Calendar</Tab>
            <Tab>Cafe List</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Calendar />
            </TabPanel>
            <TabPanel>
              <List cafes={dummy} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default MainScreen;
