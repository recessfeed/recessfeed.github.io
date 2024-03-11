import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";

// _light={{ bg: "brand.500" }}

export const Goals = () => {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            {/* <chakra.h2
              _light={{ color: "brand.600" }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Transactions
            </chakra.h2> */}
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{ color: "gray.900" }}
            >
              Discover and interact with siloed content
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="gray.500"
              _dark={{ color: "gray.400" }}
            >
              Here's what we're trying to be 
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Interactive content aggregator"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                RSS readers have existed for a long time - but they don't allow you to interact with content. With Recess, you can see what your friends are reading, get recommendations, and discuss the content. 
              </Feature>

              <Feature
                title="Discoverability platform"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                How much great content is out there that we never find out about? Personal websites and blogs are silos that struggle to find the light. And when they do, they often disappear. 
              </Feature>

              <Feature
                title="A central place to hold discussions"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Many blogs and sites don't have a way to enable discussions. Not because they don't want to, but because maintaining a platform that enables this takes work. Let us take care of likes and comments for you.
              </Feature>

              <Feature
                title="A champion for deeper content"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Social media platforms these days are focused on quick and short-lived comment. We want to be champions for long-form, deeper, insightful content, that often doesn't do well on places like <s>Twitter</s> X or Instagram.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
