import { Flex, Heading, Box, useBreakpointValue } from "@chakra-ui/react";

const NavComponent = () => {

  const showNavbar = useBreakpointValue({ base: false, sm: false, md: true });

  return (
    <>
      {showNavbar && (
        <Flex
          bg="black"
          position="fixed"
          w="100%"
          justify="space-between"
          align="center"
          paddingY="5"
          paddingX="10"
          zIndex="9999"
        >

          <Box>
            <a href="#landing">
              <Heading color="white">Vincent Mai</Heading>
            </a>

          </Box>
          <Flex gap="10" wrap="wrap">
            <a href="#about">
              <Heading color="white" size="md">About</Heading>
            </a>
            <a href="#experience">
              <Heading color="white" size="md">Experience</Heading>
            </a>
            <a href="#projects">
              <Heading color="white" size="md">Projects</Heading>
            </a>
            <a href="#contact">
              <Heading color="white" size="md">Contact</Heading>
            </a>
          </Flex>
        </Flex>
      )}
    </>


  );
};

export default NavComponent;
