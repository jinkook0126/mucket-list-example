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
import useFoodStore from "@/store/useCardStore";

const ListCard = (params: FoodItem) => {
  const [checked, setChecked] = useState<boolean>(params.done);
  const { remove, update } = useFoodStore();
  console.log(params);

  const onDelete = () => {
    remove(params.idx);
  };

  const onChange = () => {
    update(params.idx, !checked);
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
                {params.contents}
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
