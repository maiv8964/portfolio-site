import { VStack, Stack, Heading, Image, Center } from "@chakra-ui/react"
import babyskipper from '../images/babyskipper.jpg'

const LandingPage = () => {
    return (

        <Center height="100vh">
            <Stack direction={{base: "column", md: "row"}} gap="10">
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
                    src={babyskipper}
                    boxSize="150px"
                    borderRadius="full"
                    fit="cover"
                    alt="Vincent Mai"
                    data-state="open"
                    _open={{
                        animationName: "fade-in, slide-from-top, scale-in",
                        animationDuration: "2000ms",
                    }}
                />
            </Stack>
        </Center>
        
    )
}

export default LandingPage