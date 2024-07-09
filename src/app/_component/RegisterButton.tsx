"use client";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import RegisterModal from "./RegisterModal";

const RegisterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme={"green"}
        aria-label="add button"
        size="sm"
        icon={<AddIcon w={4} h={4} color="white" />}
      />
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default RegisterButton;
