"use client";
import { Stack, Box, Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import firestore from "@/firebase/firestore";
import { FoodItem } from "@/types/mucket";

const ListContainer = () => {
  const [lists, setLists] = useState<FoodItem[]>([]);
  const tags = ["jongyoon", "eunji"];
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (v: number) => {
    setTabIndex(v);
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
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        isFitted
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab>종윤</Tab>
          <Tab>은지</Tab>
        </TabList>
      </Tabs>
      <Stack spacing={4} mt={4}>
        {lists
          .filter((item) => item.tag === tags[tabIndex])
          .map((item) => (
            <ListCard key={item.id} {...item} />
          ))}
      </Stack>
    </Box>
  );
};

export default ListContainer;
