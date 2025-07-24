import { Heading, Flex, Text, Container, SimpleGrid } from "@chakra-ui/react"
import ImageCarousel from "./ImageCarousel"

const AboutPage = () => {
    return(
        <>
            <Heading textAlign="center" size="5xl" paddingTop="70px">About</Heading>

            <Flex justifyContent="center">
                <SimpleGrid columns={[1, 2]} gap="30px" alignItems="center" minChildWidth="sm" margin={10}>

                    <Container size="sm">
                        <Text textStyle="2xl">
                            I'm Vincent Mai, a recent Software Engineering graduate from York University with a strong foundation in full-stack development, embedded systems, and software testing. I’ve gained valuable industry experience through internships, where I contributed to real-world applications and collaborative Agile teams. Outside of coding, I’m passionate about cycling, photography, and lifting weights at the gym — activities that keep me focused, creative, and driven. I'm currently looking for new opportunities where I can continue learning, apply my skills, and grow as a developer.
                        </Text>
                    </Container>

                    <ImageCarousel></ImageCarousel>
                    
                </SimpleGrid>

            </Flex>

            
        </>
    )
}

export default AboutPage