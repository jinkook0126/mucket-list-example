"use client";
import { Stack } from "@chakra-ui/react";
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
