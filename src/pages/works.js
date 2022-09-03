import React, { Component } from "react";
import{
    Box,
    Heading,
    SimpleGrid,
    Badge,
    Container,
    Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card_1 from "../components/DefaultCard";
import Card_2 from "../components/OtherCard"
import SimolinksLight from '../images/simolinksLight.jpg'
import Immobiliare from '../images/immobiliare_01.jpg'
import Chat from '../images/chat_01.jpg'
import Bot from '../images/bot.jpg'
import { NavLink } from 'react-router-dom'

const desc_1 = "Web page that contains all the links to my social networks and to the site."
const desc_2 = "School project of a site simulating the behavior of an real estate agency."
const desc_3 = "School project of a web application that simulates the behavior a web chat."
const desc_4 = "Telegram bot that performs the same function as the real estate site." 

const Works = () =>{
        return(
            <>
                <Navbar/>
                <Container>
                    <motion.div animate={{y:80}} transition={{duration: 0.3}}>
                        <Heading variant='title'>Finished:</Heading>
                        <SimpleGrid columns={[1,1,2]} gap={6} mt={10}>
                            <NavLink to='/linksPage'>
                                <Card_1 image={SimolinksLight} title='Links-Page' description={desc_1} badge='new'/>
                            </NavLink>
                            <NavLink to='/realEstate'>
                                <Card_1 image={Immobiliare} title='Real estate-Site' description={desc_2}/>
                            </NavLink>
                            <NavLink to='/webChat'>
                                <Card_1 image={Chat} title='Web-Chat' description={desc_3}/>
                            </NavLink>
                            <NavLink to='/realEstateBot'>
                                <Card_1 image={Bot} title='Real estate-Bot' description={desc_4}/>
                            </NavLink>
                        </SimpleGrid>
                        <Heading variant='title' mt={10}>In progress:</Heading>
                        <SimpleGrid columns={[1,1,2]} gap={6} mt={10}>
                            <Card_2 titolo='Minecraft mod' value={5} valueNum='5%' color='red'/>
                            <Card_2 titolo='Bot 2.0' value={5} valueNum='5%' color='red'/>
                        </SimpleGrid>
                        <Footer/>
                    </motion.div>
                </Container>
            </>
        )
}

export default Works