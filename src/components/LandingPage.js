import { VStack, Stack, Heading, Image, Flex } from "@chakra-ui/react"
import portrait from '../images/portfolio.jpg'

const LandingPage = () => {
    return (

        <Flex height="100vh" alignItems="center" gap="10" justify="center" paddingY="10" wrap="wrap">
                <Stack 
                    data-state="open"
                    _open={{
                        animationName: "fade-in, scale-in",
                        animationDuration: "2000ms",
                    }}
                >
                    <VStack>
                        <Heading size="6xl">Hi, I'm Vincent</Heading>
                        <Heading size="6xl">Software Engineer</Heading>
                    </VStack>
                </Stack>
                <Image 
                    src={portrait}
                    htmlWidth="400px"
                    borderRadius="full"
                    fit="cover"
                    alt="Vincent Mai"
                    data-state="open"
                    _open={{
                        animationName: "fade-in, slide-from-top, scale-in",
                        animationDuration: "2000ms",
                    }}
                />
            </Flex>
        
    )
}

export default LandingPage