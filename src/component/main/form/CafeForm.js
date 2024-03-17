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
} from "@chakra-ui/react";
import FormHeader from "./FormHeader";
import Basic from "../data/Basic";

function CafeForm() {
  const steps = [
    { title: "1. 기본", description: "Contact Info" },
    { title: "2. 카페", description: "Date & Time" },
    { title: "3. 생일 카페", description: "Select Rooms" },
  ];
  const [activeStep, setActiveStep] = useState(0);

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
          <div>2</div>
        ) : activeStep === 2 ? (
          <div>3</div>
        ) : null}
      </Box>
      {/*<Spacer />*/}
      {/*<Flex>*/}
      {/*  <Button onClick={handleBack} isDisabled={activeStep === 0}>*/}
      {/*    Back*/}
      {/*  </Button>*/}
      {/*  <Spacer />*/}
      {/*  <Button onClick={handleNext}>*/}
      {/*    {activeStep === 2 ? "Done" : "Next"}*/}
      {/*  </Button>*/}
      {/*</Flex>*/}
    </Flex>
  );
}

export default CafeForm;
