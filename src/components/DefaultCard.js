import React, { Component } from "react";
import{ 
    Box,
    Button,
    Badge,
    Image,
    Icon,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'


export const Card_1 = ({image, title, description, badge}) =>{
    const dc = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
    const gc = useColorModeValue('purple','orange');
    const cc = useColorModeValue('whiteAlpha.500','whiteAlpha.100')

        return(
            <>
                <Box
                    boxShadow='md'
                    borderRadius='lg'
                    p={5}
                    bg={cc}>
                    <Image border='1px solid' borderColor={dc} borderRadius='lg' h={36} w='full' src={image}></Image>
                    <Text mt={5} fontSize={21}>
                        {title}
                        <Badge ml={2} borderRadius='5px' pr={2} pl={2} colorScheme='whatsapp'>{badge}</Badge>
                    </Text>
                    <Text>{description}</Text>
                    <motion.div whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }}>
                    <Button mt={5} colorScheme={gc}>
                    Watch Now
                        <motion.div whileHover={{translateX: 15}}>
                        <Icon ml={1} as={ArrowForwardIcon}/>
                        </motion.div>
                    </Button>
                    </motion.div>
                </Box>
        </>
    )
}

/*
border='1px solid'
borderColor={dc}
*/

export default Card_1