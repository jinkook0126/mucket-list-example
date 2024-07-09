"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

type TDisclosure = {
  isOpen: boolean;
  onClose: () => void;
};
const RegisterModal = ({ isOpen, onClose }: TDisclosure) => {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (input.current) {
          input.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={"90%"}>
        <ModalHeader>먹킷 추가</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="기가막힌 안주" variant={"filled"} ref={input} />
        </ModalBody>

        <ModalFooter>
          <Button variant={"ghost"} colorScheme="red" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="green">등록</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RegisterModal;
