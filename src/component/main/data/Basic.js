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
} from "@chakra-ui/react";
import Comic from "./select/Comic";
import Idol from "./select/Idol";
function Basic() {
  const [selectRadio, setSelectRadio] = useState("");

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
            <Input type="text" placeholder="이름을 입력해주세요." />
          </FormControl>
        </Box>
        <Box p="3" marginBottom="3">
          <FormControl>
            <FormLabel fontWeight="bold">소속을 선택해주세요</FormLabel>
            <RadioGroup
              defaultValue="Itachi"
              value={selectRadio}
              onChange={setSelectRadio}
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
          {selectRadio === "2d" ? (
            <Comic />
          ) : selectRadio === "idol" ? (
            <Idol />
          ) : selectRadio === "actor" ? (
            "배우를 선택했습니다."
          ) : (
            "위에 있는 옵션을 선택해주세요."
          )}
        </Box>
      </Container>
    </Flex>
  );
}

export default Basic;
