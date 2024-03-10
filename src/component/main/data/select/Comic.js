import React from "react";
import { Select } from "@chakra-ui/react";

function Comic() {
  const options = ["원피스", "나루토", "암살교실"];
  return (
    <Select placeholder="Select option" variant="flushed">
      {options.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </Select>
  );
}

export default Comic;
