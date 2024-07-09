"use client";
import {
  Stack,
  Flex,
  Box,
  Card,
  CardBody,
  Text,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, CalendarIcon } from "@chakra-ui/icons";
import ListCard from "./ListCard";
const ListContainer = () => {
  return (
    <Stack p={8} h="100vh" bg={"gray.200"} spacing={4}>
      <ListCard />
      <ListCard />
    </Stack>
  );
};

export default ListContainer;
