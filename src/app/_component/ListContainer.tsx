"use client";
import { Stack } from "@chakra-ui/react";
import ListCard from "./ListCard";
import useFoodStore from "@/store/useCardStore";
const ListContainer = () => {
  const { muckets } = useFoodStore();
  return (
    <Stack p={8} h="100vh" bg={"gray.200"} spacing={4}>
      {muckets.map((item) => (
        <ListCard key={item.idx} {...item} />
      ))}
    </Stack>
  );
};

export default ListContainer;
