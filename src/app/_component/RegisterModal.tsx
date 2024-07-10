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
  useToast,
} from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";
import firestore from "@/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

type TDisclosure = {
  isOpen: boolean;
  onClose: () => void;
};
const RegisterModal = ({ isOpen, onClose }: TDisclosure) => {
  const toast = useToast();
  const [mucket, setMucket] = useState<string>("");
  const onRegister = async () => {
    if (mucket === "") {
      toast({
        title: "저장 실패",
        description: "빈 값을 저장할 수 없습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    await addDoc(collection(firestore, `muckets`), {
      mucket,
      done: false,
      createdAt: new Date(),
    });
    setMucket("");
    onClose();
  };
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMucket(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={"90%"}>
        <ModalHeader>먹킷 추가</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="기가막힌 안주"
            variant={"filled"}
            value={mucket}
            onChange={onChangeInput}
          />
        </ModalBody>

        <ModalFooter>
          <Button variant={"ghost"} colorScheme="red" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="green" onClick={onRegister}>
            등록
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RegisterModal;
