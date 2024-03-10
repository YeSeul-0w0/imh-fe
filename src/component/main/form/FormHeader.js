import React from "react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function FormHeader() {
  const navigate = useNavigate();

  const moveBack = () => navigate(`/`);
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <IconButton
        variant="none"
        colorScheme="teal"
        aria-label="ArrowBackIcon"
        width="2rem"
        onClick={moveBack}
        icon={<ArrowBackIcon />}
      />
      <Box>
        <Heading size="md">생일 카페 정보를 입력하세요</Heading>
      </Box>
    </Flex>
  );
}

export default FormHeader;
