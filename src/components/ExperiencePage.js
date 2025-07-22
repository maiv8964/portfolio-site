import { Flex,Text, Heading, Timeline, Stack, Container } from "@chakra-ui/react"


const experiences = [
    {
        position: 'Pharmacy IT Technician - General Technology and Systems',
        timespan: 'Jan 2024 - Apr 2024',
        company: 'Pharmasave RealCare Pharmacy',
        description: 'Installed and configured computer hardware, pharmacy management software, and peripherals to support daily operations. Designed and deployed wired network infrastructure for multiple workstations, configuring routers, switches, and access points to ensure reliable and secure system performance.'
    },
    {
        position: 'Junior Software Developer Intern',
        timespan: 'May 2023 - Dec 2023',
        company: 'Iot Signum',
        description: 'Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Improved back-end performance, enhanced UI responsiveness, and contributed to testing frameworks and feature development within an Agile team.'
    },
    {
        position: 'Junior Software Developer Intern',
        timespan: 'Sep 2022 - Dec 2022',
        company: 'Iot Signum',
        description: 'Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Improved back-end performance, enhanced UI responsiveness, and contributed to testing frameworks and feature development within an Agile team.'
    },
    {
        position: 'Mathematics Tutor',
        timespan: 'Jun 2020 - Present',
        company: 'Iron Tutor',
        description: 'Delivered personalized tutoring sessions to students from Grades 2-12 across a range of math topics including arithmetic, algebra, geometry, and calculus. Developed tailored lesson plans based on individual student needs and led both one-on-one and group sessions to foster understanding and engagement.'
    },
]

const ExperiencePage = () => {
    return(
        <>
            <Heading textAlign="center" size="5xl">Experience</Heading>

            <Container size="sm" paddingTop="10">
                <Timeline.Root size="xl" variant="subtle">

                    

                    {experiences.map((experience, index) => {
                        return (
                            
                            <Timeline.Item key={index}>
                            {!(index % 2) ? (
                                <>
                                <Timeline.Content flex="1" />
                                <Timeline.Connector>
                                    <Timeline.Separator />
                                    <Timeline.Indicator />
                                </Timeline.Connector>
                                <Timeline.Content flex="1">
                                    <Timeline.Title>
                                    <Stack>
                                        <Heading size="2xl">{experience.position}</Heading>
                                        <Text>{experience.timespan}</Text>
                                        <Heading size="lg">{experience.company}</Heading>
                                    </Stack>
                                    </Timeline.Title>
                                    <Timeline.Description>
                                        <Text>{experience.description}</Text>
                                    </Timeline.Description>
                                </Timeline.Content>
                                </>
                            ) : (
                                <>
                                <Timeline.Content flex="1" alignItems="flex-end">
                                    <Timeline.Title>
                                    <Stack>
                                        <Heading size="2xl">{experience.position}</Heading>
                                        <Text>{experience.timespan}</Text>
                                        <Heading size="lg">{experience.company}</Heading>
                                    </Stack>
                                    </Timeline.Title>
                                    <Timeline.Description>
                                        <Flex justifyContent="flex-end">
                                            <Text>{experience.description}</Text>
                                        </Flex>
                                    </Timeline.Description>
                                </Timeline.Content>
                                <Timeline.Connector>
                                    <Timeline.Separator />
                                    <Timeline.Indicator />
                                </Timeline.Connector>
                                <Timeline.Content flex="1" />
                                </>
                            )}
                            </Timeline.Item>
                        );
                        })}


                    

                </Timeline.Root>

            </Container>

            
        </>
    )
}

export default ExperiencePage