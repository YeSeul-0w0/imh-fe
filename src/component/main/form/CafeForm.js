import React, { useState } from "react";
import {
  Flex,
  Stepper,
  Step,
  StepTitle,
  Box,
  StepStatus,
  StepIndicator,
  StepNumber,
  StepIcon,
  StepSeparator,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  CardBody,
  Card,
  Heading,
  Stack,
  StackDivider,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import FormHeader from "./FormHeader";
import Basic from "../data/Basic";
import Cafe from "../data/Cafe";
import Operation from "../data/Operation";
import { useNavigate } from "react-router-dom";

function CafeForm() {
  const navigate = useNavigate();
  const steps = [
    { title: "Step 1", description: "Basic Info" },
    { title: "Step 2", description: "Location" },
    { title: "Step 3", description: "Data & Gift" },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((currentAction) => currentAction + 1);
  };

  const handleBack = () => {
    setActiveStep((currentAction) => currentAction - 1);
  };

  const [basic, setBasic] = useState({
    character: "",
    dimension: "",
    groupName: "",
  });
  const handleBasic = (values) => {
    setBasic(values);
  };

  const [cafe, setCafe] = useState({
    cafeName: "",
    address: "",
    lat: "",
    lon: "",
  });
  const handleCafe = (values) => {
    setCafe(values);
  };

  const [operation, setOperation] = useState({ dates: "", selectGifts: [] });
  const handleOperation = (value) => {
    setOperation(value);
  };

  const [confirm, setConfirm] = useState(false);
  const onClose = () => {
    setConfirm((prev) => !prev);
  };

  const onSubmit = () => navigate(`/`);

  return (
    <Flex minW="max-content" direction="column" minH="100%">
      <Box>
        <FormHeader />
        <Stepper index={activeStep} marginTop="5" p="2">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        {activeStep === 0 ? (
          <Basic onValue={handleBasic} step={handleNext} />
        ) : activeStep === 1 ? (
          <Cafe
            onValue={handleCafe}
            backStep={handleBack}
            nextStep={handleNext}
          />
        ) : activeStep === 2 ? (
          <Operation
            backStep={handleBack}
            check={setConfirm}
            onValue={handleOperation}
          />
        ) : null}
      </Box>
      <Modal isOpen={confirm} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>입력하신 정보가 맞으신가요?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      1. 기본 정보
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      <strong>이름:</strong> {basic.character} <br />
                      <strong>소속:</strong> {basic.groupName}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      2. 카페 정보
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      <strong>카페 이름:</strong> {cafe.cafeName} <br />
                      <strong>카페 주소:</strong> {cafe.address}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      3. 날짜 및 특전
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {operation.dates[0]} ~ {operation.dates[1]} <br />
                      <Text fontSize="md" as="b">
                        특전
                      </Text>
                      <UnorderedList>
                        {operation.selectGifts.map((item) => (
                          <ListItem>{item}</ListItem>
                        ))}
                      </UnorderedList>
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              닫기
            </Button>
            <Button colorScheme="twitter" onClick={onSubmit}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default CafeForm;
