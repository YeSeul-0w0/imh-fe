import React from "react";
import { Select } from "@chakra-ui/react";

function Idol() {
  const options = ["드림캐쳐", "소녀시대", "솔로"];
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

export default Idol;
