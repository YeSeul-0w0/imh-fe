import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import dummy from "../../static/cafe_list.json"; // 더미 데이터
function MainScreen() {
  const navigate = useNavigate();
  const goCalendar = () => {
    navigate("/calendar");
  };
  const today = new Date();

  return (
    <div>
      <Heading as="h2" size="xl">
        {today.getMonth() + 1}월
      </Heading>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Cafe Name</Th>
              <Th>Date</Th>
              <Th>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummy.cafes.map((cafe) => (
              <Tr key={cafe.key}>
                <Td>{cafe.name}</Td>
                <Td>{cafe.date}</Td>
                <Td>{cafe.location}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <Button
        colorScheme="teal"
        size="xs"
        onClick={() => {
          goCalendar();
        }}
      >
        see the calendar
      </Button>
    </div>
  );
}

export default MainScreen;
