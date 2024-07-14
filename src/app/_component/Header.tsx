import { Box, Flex, Text } from "@chakra-ui/react";
import RegisterButton from "./RegisterButton";

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
        zIndex="-1"
        sx={{
          filter: "brightness(50%)",
        }}
      />
      <Flex
        h={40}
        direction="row"
        alignItems={"center"}
        justify="space-between"
        px={4}
      >
        <Text fontWeight={700} color={"green.200"} fontSize={30}>
          먹킷 리스트 😋
        </Text>
        <RegisterButton />
      </Flex>
    </Box>
  );
};

export default Header;
