import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Container,
  Box,
  Radio,
  RadioGroup,
  HStack,
  Spacer,
  Select,
  Button,
  useToast,
  Fade,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import groupInfo from "../../../static/group_list.json";
import PropTypes from "prop-types";

function Basic({ onValue, step }) {
  const [character, setCharacter] = useState("");
  const handleName = (event) => {
    setCharacter(event.target.value);
  };
  const [dimension, setDimension] = useState("");

  const [groupName, setGroupName] = useState("");
  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };

  const toast = useToast();
  const toastIdRef = React.useRef();
  const setWarning = () => {
    toastIdRef.current = toast({
      description: "값을 입력하세요.",
      status: "error",
    });
  };

  const onNext = () => {
    if (character && dimension && groupName) {
      onValue({ character, dimension, groupName });
      step();
    } else {
      setWarning();
    }
  };

  return (
    <Flex alignItems="center">
      <Container width="100%">
        <Box p="4" margin="10" textAlign="center">
          생일 카페 주인공에 대한 정보를 입력하는 페이지 입니다. <br />
          주인공의 이름과 소속을 알려주세요.
        </Box>
        <Box p="3" marginBottom="3">
          <FormControl fontWeight="bold">
            <FormLabel>이름</FormLabel>
            <Input
              type="text"
              placeholder="이름을 입력해주세요."
              value={character}
              onChange={handleName}
            />
          </FormControl>
        </Box>
        <Box p="3" marginBottom="3">
          <FormControl>
            <FormLabel fontWeight="bold">소속을 선택해주세요</FormLabel>
            <RadioGroup
              defaultValue="Itachi"
              value={dimension}
              onChange={setDimension}
            >
              <HStack>
                <Radio value="2d">애니&만화</Radio>
                <Spacer />
                <Radio value="idol">아이돌</Radio>
                <Spacer />
                <Radio value="actor">배우</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box p="3" marginBottom="3">
          {dimension ? (
            <Select
              placeholder="선택하세요"
              variant="flushed"
              value={groupName}
              onChange={handleGroupName}
            >
              {groupInfo[dimension].map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {" "}
                    {value}
                  </option>
                );
              })}
            </Select>
          ) : null}
        </Box>
        <Box display="flex" justifyContent="flex-end" marginBottom="3">
          <Button onClick={onNext}>Next</Button>
        </Box>
      </Container>
    </Flex>
  );
}

Basic.prototype = {
  onValue: PropTypes.object.isRequired,
  step: PropTypes.func.isRequired
}

export default Basic;
