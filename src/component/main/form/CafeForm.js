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
  useDisclosure,
} from "@chakra-ui/react";
import FormHeader from "./FormHeader";
import Basic from "../data/Basic";
import Cafe from "../data/Cafe";
import Operation from "../data/Operation";

function CafeForm() {
  const steps = [
    { title: "Step 1", description: "Basic Info" },
    { title: "Step 2", description: "Location" },
    { title: "Step 3", description: "Data & Gift" },
  ];
  const [activeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    setActiveStep((currentAction) => currentAction + 1);
  };

  const handleBack = () => {
    setActiveStep((currentAction) => currentAction - 1);
  };

  const [basic, setBasic] = useState({ character: "", level: "", group: "" });
  const handleBasic = (values) => {
    setBasic(values);
  };

  const [cafe, setCafe] = useState({ name: "", location: "" });
  const handleCafe = (values) => {
    setCafe(values);
  };

  const [operation, setOperation] = useState({ dates: "", gifts: "" });
  const handleOperation = (value) => {
    setOperation(value);
  };

  const [confirm, setConfirm] = useState(false);
  const onClose = () => {
    setConfirm((prev) => !prev);
  };

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>test</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default CafeForm;
