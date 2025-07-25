import { Flex, Heading, HStack, Text} from "@chakra-ui/react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactPage = () => {
    return(
        <>
            <Heading textAlign="center" size="5xl" paddingTop="70px">Reach Out</Heading>
            
            <Flex gap="10" justify="center" paddingY="10" wrap="wrap">
                <a href="mailto:vincentmai82@gmail.com" rel="opener">
                    <HStack>
                        <IoMdMail size={40}/>
                        <Text>vincentmai82@gmail.com</Text>
                    </HStack>
                </a>

                <a href="https://www.instagram.com/vincentmai82/?utm_source=qr&igsh=MWplcDZpeG82dTZ3aA%3D%3D#" rel="opener">
                    <HStack>
                        <FaInstagram size={40}/>
                        <Text> Instagram</Text>
                    </HStack>
                </a>

                <a href="https://www.linkedin.com/in/vincentmai82/" rel="opener">
                    <HStack>
                        <FaLinkedin size={40}/>
                        <Text>LinkedIn</Text>
                    </HStack>
                </a>

                <a href="https://github.com/maiv8964" rel="opener">
                    <HStack>
                        <FaGithub size={40}/>
                        <Text>Github</Text>
                    </HStack>
                </a>
            </Flex>

            
            
        </>
    )
}

export default ContactPage