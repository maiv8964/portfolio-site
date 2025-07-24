import { Box, VStack, Stack, Heading, Image, Flex } from "@chakra-ui/react"
import portrait from '../images/portfolio.jpg'
import background from '../images/background.jpg'
const LandingPage = () => {
    return (

        <Box
            bgImage={`url(${background})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            height="100vh"
            width="100vw"
        >>
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
        </Box>
    )
}

export default LandingPage