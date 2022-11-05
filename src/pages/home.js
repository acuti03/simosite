import React from 'react';
import {
  Container,
  Avatar,
  Heading,
  Button,
  Box,
  Link,
  Icon,
  Text,
  Highlight,
  createIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Me from '../images/me.jpg'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { ArrowForwardIcon } from '@chakra-ui/icons'


const Home = () =>{
  const ba = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const bc = useColorModeValue('purple','orange');

  return (
      <>
        <Navbar />
        <motion.div animate={{y: 80}} transition={{duration:0.3}}>
          <Container p={3}>
            <Box
              borderRadius='lg'
              p={3}
              align='center'
              bg={ba}>
              Hello, welcome to my site!
            </Box>
            <Box mt={20} display='flex'>
              <Box flexGrow={1}>
                <Heading letterSpacing='2px' fontWeight='800' fontSize={28}>
                <Highlight
                  query='Simone'
                  styles={{ px: '2', py: '1', rounded: 'full', bg:useColorModeValue('purple.500', 'orange.200'), color:useColorModeValue('#f0e7db', '#202023')}}>
                    Simone Acuti
                </Highlight>
                </Heading>
                <Text mt={5}>Student at the University of Ferrara</Text>
              </Box>
              <Avatar src={Me} border='2px solid white' size='2xl'/>
            </Box>
            <Box mt={5} align='right'>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                right={-71}
                top={'10px'}
                mr={10}
                transform={'rotate(80deg)'}
              />
              <Text
                fontSize={24}
                fontFamily={'Caveat'}
                mt={12}
                transform={'rotate(-10deg)'}>
                Hi, this is me !
              </Text>
            </Box>
            <Box>
              <br/><br/>
              <Heading variant='title'>Bio:</Heading>
              <Text>
                I was born in Italy on november 29 of the year 2003 in a small town in the province of Mantua. 
                I graduated from the technical institute Galileo Galilei in Ostiglia in the computer science field and for eight years I attended sports at a competitive level. 
                I am now about to embark on a university course at the university of ferrara, choosing the computer science major.<br/>
                You can visit my <Link variant='link'><NavLink to='/linksPage'>links's page</NavLink></Link> for more information.
              </Text>
              <br/><br/>
              <Heading variant='title'>Study:</Heading>
              <Text>
                  <Highlight 
                    query='1 Year:'
                    styles={{fontWeight: '800', fontSize:18, fontFamily:"'M PLUS Rounded 1c'" , color:useColorModeValue('purple.500', 'orange.200')}}>
                  1 Year: at my first year I studied the fondumentals of computer science and I getting started with the: C, html, css languages.
                  </Highlight><br/><br/>
                  <Highlight 
                    query='2 Year:'
                    styles={{fontWeight: '800', fontSize:18, fontFamily:"'M PLUS Rounded 1c'" , color:useColorModeValue('purple.500', 'orange.200')}}>
                  2 Year: at the second year I completed the path of the C language and I started to intertwine with other languages such as php, Java and JavaScript.
                  </Highlight><br/><br/>
                  <Highlight
                    query='3 Year:'
                    styles={{fontWeight: '800', fontSize:18, fontFamily:"'M PLUS Rounded 1c'" , color:useColorModeValue('purple.500', 'orange.200')}}>
                  3 Year: the third year was where I learned the most, such as relational models, SQL language and php. I started producing my first projects like a web-chat.
                  </Highlight>
              </Text>
            </Box>
            <Box align='center' mt={10}>
              <NavLink to='/works'>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <Button colorScheme={bc} href='./works.js'>
                    Visit my Portfolio
                    <motion.div whileHover={{translateX: 15}}>
                      <Icon as={ArrowForwardIcon} ml={2}/>
                    </motion.div>
                  </Button>
                </motion.div>
              </NavLink>
            </Box>
          </Container>
          <Container>
            <Footer/>
          </Container>
      </motion.div>
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export default Home;
