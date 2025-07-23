import { Flex, Heading } from "@chakra-ui/react"

const NavComponent = () => {
    return(
        <Flex
            position="fixed" 
            w="100%"
            gap="10"
            justify="center" 
            paddingY="5"
            wrap="wrap"
            data-state="open"
            _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "5000ms",
            }}
        >
            <Heading>About</Heading>
            <Heading>Experience</Heading>
            <Heading>Projects</Heading>
            <Heading>Contact</Heading>
            
        </Flex>
    )
}

export default NavComponent