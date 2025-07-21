import { HStack, VStack, Stack, Heading, Image, Center } from "@chakra-ui/react"
import babyskipper from '../images/babyskipper.jpg'

const LandingPage = () => {
    return (

        <Center height="100vh">
            <HStack gap="10">
                <Stack>
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
                />
            </HStack>
        </Center>
        
    )
}

export default LandingPage