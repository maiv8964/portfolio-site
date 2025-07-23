import { Flex, Heading } from "@chakra-ui/react"

const NavComponent = () => {
    return(

        <nav>
            <Flex
                bg="black"
                position="fixed" 
                w="100%"
                gap="10"
                justify="center" 
                paddingY="5"
                wrap="wrap"
                zIndex="9999"
                data-state="open"
                _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "5000ms",
                }}
            >
                <a href="#about">
                    <Heading>About</Heading>
                </a>
                <a href="#experience">
                    <Heading>Experience</Heading>
                </a>
                <a href="#projects">
                    <Heading>Projects</Heading>
                </a>
                <a href="#contact">
                    <Heading>Contact</Heading>
                </a>   
            </Flex>
        </nav>
        
    )
}

export default NavComponent