import { Heading, Timeline, List, Stack, Container } from "@chakra-ui/react"

const ExperiencePage = () => {
    return(
        <>
            <Heading textAlign="center" size="5xl">Experience</Heading>

            <Container size="sm" paddingTop="10">
                <Timeline.Root size="xl" variant="subtle">

                    <Timeline.Item>
                        <Timeline.Content flex="1" />
                        <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                        </Timeline.Connector>
                        <Timeline.Content flex="1">

                        <Timeline.Title>
                            <Stack>
                                <Heading size="xl">Pharmacy IT Technician - General Technology and Systems</Heading>
                                <Heading size="sm">Pharmasave RealCare Pharmacy</Heading>
                            </Stack>
                        </Timeline.Title>
                        
                        <Timeline.Description>
                            <List.Root>
                                <List.Item>
                                Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Optimized back-end processes, reducing execution time by 25%.
                                </List.Item>
                                <List.Item>
                                Contributed to the development of unit integration and end-to-end (E2E) testing frameworks to ensure software reliability.
                                </List.Item>
                                <List.Item>
                                Collaborated in Agile workflows, completing 10+ sprints and contributing to 15+ successful features/bug fixes delivered ahead of schedule. Implemented user feedback to optimize UI responsiveness by 20%.
                                </List.Item>
                            </List.Root>

                        </Timeline.Description>
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Content flex="1" alignItems="flex-end">

                        <Timeline.Title>
                            <Stack>
                                <Heading size="xl">Junior Software Developer Intern</Heading>
                                <Heading size="sm">Iot Signum</Heading>
                            </Stack>
                        </Timeline.Title>
                        
                        <Timeline.Description>
                            <List.Root>
                                <List.Item>
                                Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Optimized back-end processes, reducing execution time by 25%.
                                </List.Item>
                                <List.Item>
                                Contributed to the development of unit integration and end-to-end (E2E) testing frameworks to ensure software reliability.
                                </List.Item>
                                <List.Item>
                                Collaborated in Agile workflows, completing 10+ sprints and contributing to 15+ successful features/bug fixes delivered ahead of schedule. Implemented user feedback to optimize UI responsiveness by 20%.
                                </List.Item>
                            </List.Root>
                        </Timeline.Description>
                        </Timeline.Content>
                        <Timeline.Connector>
                        <Timeline.Separator />  
                        <Timeline.Indicator />
                        </Timeline.Connector>
                        <Timeline.Content flex="1" />
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Content flex="1" />
                        <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                        </Timeline.Connector>
                        <Timeline.Content flex="1">

                        <Timeline.Title>
                            <Stack>
                                <Heading size="xl">Junior Software Developer Intern</Heading>
                                <Heading size="sm">Iot Signum</Heading>
                            </Stack>
                        </Timeline.Title>
                        
                        <Timeline.Description>
                            <List.Root>
                                <List.Item>
                                Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Optimized back-end processes, reducing execution time by 25%.
                                </List.Item>
                                <List.Item>
                                Contributed to the development of unit integration and end-to-end (E2E) testing frameworks to ensure software reliability.
                                </List.Item>
                                <List.Item>
                                Collaborated in Agile workflows, completing 10+ sprints and contributing to 15+ successful features/bug fixes delivered ahead of schedule. Implemented user feedback to optimize UI responsiveness by 20%.
                                </List.Item>
                            </List.Root>
                        </Timeline.Description>
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Content flex="1" alignItems="flex-end">

                        <Timeline.Title>
                            <Stack>
                                <Heading size="xl">Mathematics Tutor</Heading>
                                <Heading size="sm">Iron Tutor</Heading>
                            </Stack>
                        </Timeline.Title>
                        
                        <Timeline.Description>
                            <List.Root>
                                <List.Item>
                                Developed, debugged, and maintained a full-stack web application using Python, Django, HTML, CSS, and JavaScript. Optimized back-end processes, reducing execution time by 25%.
                                </List.Item>
                                <List.Item>
                                Contributed to the development of unit integration and end-to-end (E2E) testing frameworks to ensure software reliability.
                                </List.Item>
                                <List.Item>
                                Collaborated in Agile workflows, completing 10+ sprints and contributing to 15+ successful features/bug fixes delivered ahead of schedule. Implemented user feedback to optimize UI responsiveness by 20%.
                                </List.Item>
                            </List.Root>
                        </Timeline.Description>

                        </Timeline.Content>
                        <Timeline.Connector>
                        <Timeline.Separator />  
                        <Timeline.Indicator />
                        </Timeline.Connector>
                        <Timeline.Content flex="1" />
                    </Timeline.Item>

                </Timeline.Root>

            </Container>

            
        </>
    )
}

export default ExperiencePage