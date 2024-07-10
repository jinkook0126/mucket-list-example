import {
  Flex,
  Box,
  Card,
  CardBody,
  Text,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, CalendarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import dayjs from "dayjs";
import { FoodItem } from "@/types/mucket";
import { deleteDoc,updateDoc,doc } from 'firebase/firestore'
import firestore from "@/firebase/firestore";

const ListCard = (params: FoodItem) => {
  const [checked, setChecked] = useState<boolean>(params.done);
	const document = doc(firestore, 'muckets', params.id);

  const onDelete = async () => {
    await deleteDoc(document);
  };

  const onChange = async () => {
    await updateDoc(document, {
			done: !checked,
      ...(!checked && { date: new Date() })
		});
    setChecked(!checked);
  };

  return (
    <Card variant="elevated">
      <CardBody>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex>
            <Checkbox
              size={"lg"}
              colorScheme="green"
              isChecked={checked}
              onChange={onChange}
            />
            <Box ml={4}>
              <Text
                textDecorationLine={checked ? "line-through" : "none"}
                color={checked ? "gray.300" : "black"}
              >
                {params.mucket}
              </Text>
              {checked && (
                <Flex align={"center"}>
                  <CalendarIcon boxSize={3} color={"green.300"} />
                  <Text ml={2} fontSize={12} color={"green.300"}>
                    {dayjs(params.date).format("YYYY-MM-DD")}
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
          <IconButton
            onClick={onDelete}
            colorScheme={"red"}
            aria-label="remove button"
            size="xs"
            icon={<DeleteIcon w={3} h={3} color="white" />}
          />
        </Flex>
      </CardBody>
    </Card>
  );
};
export default ListCard;
