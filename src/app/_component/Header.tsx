"use client";
import { Text, Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box h={40}>
      <Box
        h={40}
        bgImage={"/assets/banner.jpeg"}
        backgroundSize="cover"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1"
        sx={{
          filter: "blur(2px)",
        }}
      />
      <Flex
        h={40}
        direction="row"
        alignItems={"center"}
        justify="space-between"
        px={4}
      >
        <Heading
          color={"#48BB78"}
          sx={{
            WebkitTextStroke: "1px #F0FFF4",
          }}
        >
          Mucket List 😋
        </Heading>
        <IconButton
          colorScheme={"green"}
          aria-label="add button"
          size="sm"
          icon={<AddIcon w={4} h={4} color="white" />}
        />
      </Flex>
    </Box>
  );
};

export default Header;
