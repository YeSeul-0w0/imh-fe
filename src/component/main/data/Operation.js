import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import "../../../static/css/operation.css";
import gifts from "../../../static/gifts.json";
import DateFormat from "../../common/DateFormat";
import PropTypes from "prop-types";

function Operation({ backStep, onValue, check }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dates, setDates] = useState([]);

  const [selectGifts, setSelectGifts] = useState([]);
  const handleCheckboxChange = (option) => {
    const isSelected = selectGifts.includes(option);
    if (isSelected) {
      setSelectGifts(selectGifts.filter((item) => item !== option));
    } else {
      setSelectGifts([...selectGifts, option]);
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      const startDateFormat = DateFormat(new Date(start));
      const endDateFormat = DateFormat(new Date(end));
      setDates([startDateFormat, endDateFormat]);
    } else {
      setDates([]);
    }
  };

  const itemList = gifts["gifts"].reduce((resultArray, item, index) => {
    const checkItem = Math.floor(index / 4);
    if (!resultArray[checkItem]) {
      resultArray[checkItem] = [];
    }
    resultArray[checkItem].push(item);
    return resultArray;
  }, []);

  const onDone = () => {
    if (dates && selectGifts) {
      onValue({ dates, selectGifts });
      check(true);
    } else {
    }
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Flex width="100%" height="100%">
      <Container>
        <Box p="4" margin="10" textAlign="center">
          생일 카페에 대한 기본적인 정보들을 입력하는 페이지 입니다.
        </Box>
        <Box p="3" marginBottom="3">
          <FormControl fontWeight="bold">
            <FormLabel>생일 카페 운영일을 선택해주세요.</FormLabel>
            <DatePicker
              className="custom-input"
              selected={startDate}
              locale={ko}
              onChange={(dates) => handleDateChange(dates)}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              placeholderText="클릭해서 날짜를 선택해주세요"
              dateFormat="yyyy.MM.dd"
            />
          </FormControl>
        </Box>
        <Box p="3" marginBottom="3">
          <FormControl>
            <FormLabel marginBottom="6">
              생일카페에서 제공하는 특전 물건들을 선택해주세요
            </FormLabel>
            <Stack direction="column" spacing={3} alignItems="center">
              {itemList.map((check, index) => (
                <CheckboxGroup key={index}>
                  <Stack direction="row">
                    {check.map((option, optionIndex) => (
                      <Checkbox
                        key={optionIndex}
                        value={option}
                        isChecked={selectGifts.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        margin="1"
                      >
                        {option}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              ))}
            </Stack>
          </FormControl>
        </Box>
        <Container>
          <Box p="3" marginBottom="3">
            <FormControl>
              <FormLabel marginBottom="6">
                생일카페에서 제공하는 특전 물건들을 선택해주세요
              </FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {uploadedImage && (
                <Image
                  marginTop="1"
                  height="sm"
                  src={uploadedImage}
                  alt="cafe information"
                />
              )}
            </FormControl>
          </Box>
        </Container>
        <Flex marginBottom="3">
          <Button onClick={backStep}>Back</Button>
          <Spacer />
          <Button onClick={onDone}>Done</Button>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Operation;

Operation.prototype = {
  backStep: PropTypes.func.isRequired,
  onValue: PropTypes.object.isRequired,
  check: PropTypes.bool.isRequired,
};
