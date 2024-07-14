"use client";
import {
  Flex,
  Text,
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
  RadioGroup,
  Radio,
  Stack,
  Grid,
  GridItem,
  Center,
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
  const [tag, setTag] = useState<string>("");
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
    if (tag === "") {
      toast({
        title: "저장 실패",
        description: "구분을 정해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    await addDoc(collection(firestore, `muckets`), {
      mucket,
      tag,
      done: false,
      createdAt: new Date(),
    });
    setMucket("");
    onClose();
  };
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMucket(e.target.value);
  };
  const onModalClose = () => {
    setMucket("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent w={"90%"}>
        <ModalHeader>먹킷 추가</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid
            w={"100%"}
            templateRows="repeat(2, 40px)"
            templateColumns="repeat(4, 25%)"
            rowGap={4}
          >
            <GridItem>
              <Center h={"100%"}>
                <Text>먹킷 이름</Text>
              </Center>
            </GridItem>
            <GridItem colSpan={3} pl={3} verticalAlign={"center"}>
              <Input
                flex={1}
                placeholder="기가막힌 안주"
                variant={"filled"}
                value={mucket}
                onChange={onChangeInput}
              />
            </GridItem>
            <GridItem>
              <Center h={"100%"}>
                <Text>구 분</Text>
              </Center>
            </GridItem>
            <GridItem colSpan={3} pl={3}>
              <Flex alignItems={"center"} height={"100%"}>
                <RadioGroup onChange={setTag} value={tag}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="jongyoon">
                      종윤
                    </Radio>
                    <Radio colorScheme="green" value="eunji">
                      은지
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button
            variant={"ghost"}
            colorScheme="red"
            mr={3}
            onClick={onModalClose}
          >
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
