import { Box, SimpleGrid, Heading, Button, Card, Image, Text } from "@chakra-ui/react"

const projects = [
    {
        name: "Grabbit- Secure Online Marketplace for Pre-Owned Goods",
        image: "",
        alt: "",
        techStack: "Node.js, Express.js, Stripe, MongoDB, React.js",
        description: "",
        github: "https://github.com/maiv8964/Grabbit"
    },
    {
        name: "App Review Pre-Processing and Sentiment Analysis",
        image: "",
        alt: "",
        techStack: "Python, Selenium, NLTK, NLP, Machine Learning",
        description: "",
        github: ""
    },
    {
        name: "FPGA Pac-Man With Rasberry Pi Integration",
        image: "",
        alt: "",
        techStack: "VHDL, MicroPython, DE-10 Lite FPGA, Rasberry Pi Pico 2W",
        description: "",
        github: ""
    },
    {
        name: "Online Auction System",
        image: "",
        alt: "",
        techStack: "HTML/CSS, Javascript, Bootstrap, SQLite, Docker, Jersey",
        description: "",
        github: "https://github.com/maiv8964/EAuction"
    },
    {
        name: "Automated Plant Growth System",
        image: "",
        alt: "",
        techStack: "Arduino, C++",
        description: "Coming Soon!",
        github: "https://github.com/maiv8964/Arduino-Projects"
    },
    {
        name: "AI Trip Planner Assistant",
        image: "",
        alt: "",
        techStack: "Node.js, React.js, Express.js, Javascript",
        description: "Coming Soon!",
        github: ""
    },
]

const ProjectsPage = () => {
    return(
        <>
            <Heading textAlign="center" size="5xl">Projects</Heading>

            <Box justifyItems="center" paddingTop="10">

                <SimpleGrid columns={[1,3]} gap="40px" marginX="5vw">

                    {projects.map((project) => {
                        return(
                            <Card.Root overflow="hidden">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                />
                                <Card.Body gap="2">
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Description>
                                    {project.techStack}
                                    </Card.Description>
                                    <Text textStyle="md" fontWeight="medium">
                                    {project.description}
                                    </Text>
                                </Card.Body>
                                <Card.Footer gap="2">
                                    <Button variant="solid">
                                        <a href={project.github}>View on Github</a>
                                    </Button>
                                </Card.Footer>
                            </Card.Root>
                        )
                    })}
                </SimpleGrid>
            </Box>
            
        </>
    )
}

export default ProjectsPage