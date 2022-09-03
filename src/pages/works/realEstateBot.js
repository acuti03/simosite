import { 
    Container, 
    Heading,
    Text,
    Tag,
    Flex,
    Link,
    Image,
    VStack,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { ExternalLinkIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import First from '../../images/bot.jpg'
import { NavLink } from "react-router-dom";


const RealEstateBot = () => {
    const dc = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    return(
        <>
            <Navbar/>
            <motion.div animate={{y: 80}} transition={{duration: 0.3}}>
            <Container>
                <Heading variant='title'>
                <NavLink to='/works'>
                        <IconButton icon={<ChevronLeftIcon fontSize='24px'/>} mt={1} mr={2} bg={useColorModeValue('#f0e7db', '#202023')}/>
                    </NavLink>
                    Info:
                </Heading>
                <Flex mt={8}>
                    <Text variant='works'>Title:</Text>
                    <Tag size='md' borderRadius='full' colorScheme='green' ml={1}>
                        Real Estate Bot
                    </Tag>
                </Flex>
                <Flex mt={3}>
                    <Text variant='works'>Description:</Text>
                    <Text mt='2px' ml={1}>A telegram bot that simulates the behavior of real estate agency but on a telegram bot. I used php to build the bot.</Text>
                </Flex>
                <Flex mt={3}>
                    <Text variant='works'>WebSite:</Text>
                    <Tag size='md' borderRadius='full' colorScheme='orange' ml={1}>
                        <Link href="https://t.me/immobiliareAcuti_bot" isExternal>t.me/immobiliareAcuti_bot<ExternalLinkIcon mx='2px'/></Link>
                    </Tag>
                </Flex>
                <Flex mt={3}>
                    <Text variant='works'>Languages:</Text>
                    <Tag size='md' borderRadius='full' colorScheme='blue' ml={1}>
                        php
                    </Tag>
                </Flex>
                <Heading mt={10} variant='title'>Photos:</Heading>
                <VStack mt={8} spacing={10}>
                    <Image borderRadius={8} src={First} border='1px solid' borderColor={dc}/>
                </VStack>
                <Footer/>
            </Container>
            </motion.div>
        </>
    )
}

export default RealEstateBot