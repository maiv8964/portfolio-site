import { Heading, Timeline, List, Stack, Container } from "@chakra-ui/react"


const experiences = [
    {
        position: 'Pharmacy IT Technician - General Technology and Systems',
        timespan: '',
        company: 'Pharmasave RealCare Pharmacy',
        description: 'sugma'
    },
    {
        position: 'Junior Software Developer Intern',
        timespan: '',
        company: 'Iot Signum',
        description: 'sugma'
    },
    {
        position: 'Junior Software Developer Intern',
        timespan: '',
        company: 'Iot Signum',
        description: 'sugma'
    },
    {
        position: 'Mathematics Tutor',
        timespan: '',
        company: 'Iron Tutor',
        description: 'sugma'
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
                                        <Heading size="xl">{experience.position}</Heading>
                                        <Heading size="sm">{experience.company}</Heading>
                                    </Stack>
                                    </Timeline.Title>
                                    <Timeline.Description />
                                </Timeline.Content>
                                </>
                            ) : (
                                <>
                                <Timeline.Content flex="1" alignItems="flex-end">
                                    <Timeline.Title>
                                    <Stack>
                                        <Heading size="xl">{experience.position}</Heading>
                                        <Heading size="sm">{experience.company}</Heading>
                                    </Stack>
                                    </Timeline.Title>
                                    <Timeline.Description />
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