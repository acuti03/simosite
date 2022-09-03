import React from "react";
import {
    Box,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'

const Footer = () => {
    const fc = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');
    const dc = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
    return(
        <Box mt={20} h='15vh'>
            <Box border='1px solid' borderRadius='full' color={dc}></Box>
            <Text fontSize={14} color={fc} mt={10} textAlign='center'> Made by Simone Acuti with &hearts;<br/></Text>
            <Text fontSize={11} color={fc} textAlign='center' mt={10} mb={8}>This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website.</a></Text><br/>
        </Box>
    )
}

export default Footer;