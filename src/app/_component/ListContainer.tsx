"use client";
import { Stack, Box, Flex, Text, Center } from "@chakra-ui/react";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import firestore from "@/firebase/firestore";
import { FoodItem } from "@/types/mucket";

type Ttag = "eunji" | "jongyoon";
type TTagMap = {
  label: string;
  value: Ttag;
};

const ListContainer = () => {
  const [lists, setLists] = useState<FoodItem[]>([]);
  const [tab, setTab] = useState<Ttag>("jongyoon");
  const tags: TTagMap[] = [
    { label: "종윤", value: "jongyoon" },
    { label: "은지", value: "eunji" },
  ];

  const handleTabsChange = (v: Ttag) => {
    setTab(v);
  };
  useEffect(() => {
    const getData = async () => {
      const q = query(
        collection(firestore, "muckets"),
        orderBy("done", "asc"),
        orderBy("createdAt", "desc")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newArr = querySnapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as FoodItem)
        );
        setLists(newArr);
      });
    };
    getData();
  }, []);
  return (
    <Box p={6} h="100vh" bg={"gray.200"}>
      <Flex alignItems={"center"} gap={4} w={"100%"} justify={"center"}>
        {tags.map((item) => (
          <Center
            key={item.value}
            onClick={() => handleTabsChange(item.value)}
            flex={1}
            bg={tab === item.value ? "green.100" : "gray.300"}
            h={10}
            borderRadius={"full"}
          >
            <Text
              fontWeight={700}
              color={tab === item.value ? "green.700" : "gray.600"}
            >
              {item.label}
            </Text>
          </Center>
        ))}
      </Flex>
      <Stack spacing={4} mt={4}>
        {lists
          .filter((item) => item.tag === tab)
          .map((item) => (
            <ListCard key={item.id} {...item} />
          ))}
      </Stack>
    </Box>
  );
};

export default ListContainer;
