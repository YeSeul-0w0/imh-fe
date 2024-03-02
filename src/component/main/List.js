import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

function List({ cafes }) {
  return (
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
          {cafes.cafes.map((cafe) => (
            <Tr key={cafe.key}>
              <Td>{cafe.name}</Td>
              <Td>{cafe.date}</Td>
              <Td>{cafe.location}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

List.prototype = {
  cafes: PropTypes.object.isRequired,
};

export default List;
