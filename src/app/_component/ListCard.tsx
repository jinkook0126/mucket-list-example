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

const ListCard = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Card variant="elevated">
      <CardBody>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex>
            <Checkbox
              size={"lg"}
              colorScheme="green"
              isChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <Box ml={4}>
              <Text
                textDecorationLine={checked ? "line-through" : "none"}
                color={checked ? "gray.300" : "black"}
              >
                hdllo
              </Text>
              {checked && (
                <Flex align={"center"}>
                  <CalendarIcon boxSize={3} color={"green.300"} />
                  <Text ml={2} fontSize={12} color={"green.300"}>
                    2024.01.01
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
          <IconButton
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
