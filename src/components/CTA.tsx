import React from "react";
import { chakra, Box, Flex, Stack, Link } from "@chakra-ui/react";

export const CTA = () => {
  return (
    <Flex
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="gray.50" _dark={{ bg: "gray.800" }}>
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{ color: "gray.100" }}
          >
            <chakra.span display="block">Try it and tell us what you think</chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
            <Link
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="#000000"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
              href="https://app.recessfeed.com"
            >
                Visit Recess 
            </Link>
            <Link
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
              href="https://github.com/recess/recess/issues"

            >
              Give feedback
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
