"use client";
import { Stack } from "@chakra-ui/react";
import ListCard from "./ListCard";
import { useEffect, useState } from "react";
import { collection, query,orderBy,onSnapshot } from 'firebase/firestore'
import firestore from "@/firebase/firestore";
import { FoodItem } from "@/types/mucket";
 
const ListContainer = () => {
  const [foo, setFoo] = useState<FoodItem[]>([]);
  useEffect(()=>{
    const getData = async()=>{
      const q = query(collection(firestore, 'muckets'), orderBy('done','asc'),orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newArr = querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id} as FoodItem));
        setFoo(newArr);
      });
    }
    getData()
  },[])
  return (
    <Stack p={8} h="100vh" bg={"gray.200"} spacing={4}>
      {foo.map((item) => (
        <ListCard key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export default ListContainer;
