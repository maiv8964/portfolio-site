import { Flex, SimpleGrid, VStack, Stack, Heading, Image, Box } from "@chakra-ui/react";
import portrait from "../images/portfolio.jpg";
import background from "../images/background.jpg";
import React, { useState, useEffect } from 'react';

const titles = ['Software Engineer', 'Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer']
const LandingPage = () => {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  })

  return (
    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      <Box
        className="fade-in-image"
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        bgImage={`url(${background})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex={0}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        zIndex={2}
        position="relative"
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        gapX={50}
      >
        <Box width="30%" margin={10}>
          <VStack align="center" textAlign="center">
            <Heading size={{ base: "5xl", md: "7xl" }}>Hi, I'm Vincent Mai</Heading>
            <Heading size={{ base: "5xl", md: "7xl" }} className="title-switcher" key={index}>
              {titles[index]}
            </Heading>
          </VStack>
        </Box>

        <Box margin={10} display="flex" justifyContent="center">
          <Image
            src={portrait}
            className="portrait"
            alt="Vincent Mai"
            // data-state="open"
            // _open={{
            //   animationName: "fade-in, slide-from-top, scale-in",
            //   animationDuration: "2000ms",
            // }}
          />
        </Box>
      </Flex>

    </Box>
  );
};

export default LandingPage;

{/* <Stack
  data-state="open"
  _open={{
    animationName: "fade-in, scale-in",
    animationDuration: "2000ms",
  }}
>
  <VStack justifyItems="center">
    <Heading size={{ base: "2xl", md: "7xl" }}>Hi, I'm Vincent</Heading>
    <Heading size={{ base: "2xl", md: "7xl" }} className="title-switcher" key={index}>{titles[index]}</Heading>
  </VStack>
</Stack> */}

{/* <Box
  justifyItems="center"
>
  <Image
    src={portrait}
    htmlWidth="50%"
    borderRadius="full"
    fit="cover"
    alt="Vincent Mai"
    data-state="open"
    _open={{
      animationName: "fade-in, slide-from-top, scale-in",
      animationDuration: "2000ms",
    }}
  />
</Box> */}