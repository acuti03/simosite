import React, { Component } from "react";
import{ 
    Box,
    Spinner,
    Progress,
    Text,
    useColorModeValue
} from '@chakra-ui/react'



export const Card_2 = ({valueNum, value, color, titolo}) => {
    const cc = useColorModeValue('whiteAlpha.500','whiteAlpha.100');

    return(
        <>
        <Box
            boxShadow='md'
            borderRadius='lg'
            overflow='hidden'
            bg={cc}
            p={5}
            textAlign='center'>
            <Spinner
                mt='100px'
                thickness='5px'
                speed='0.65s'
                color={useColorModeValue('blackAlpha.500','whiteAlpha.500')}
                emptyColor={useColorModeValue('whiteAlpha.200','blackAlpha.100')}
                size='xl'/>
            <Text mt='70px'>{titolo}</Text>
            <Progress mt={2} borderRadius={5} colorScheme={color} value={value}/>
            <Text>{valueNum}</Text>
        </Box>
        </>
    )
}

export default Card_2