import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Image,
  Icon,
  Text,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  createIcon,
  useColorModeValue
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../images/logo.png'
import  ThemeButton  from './themeButton'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'



const Navbar = () => {

    return(
        <Box
            position='fixed'
            w='100%'
            as="nav"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            zIndex={2}
            css={{backdropFilter: 'blur(10px)'}}>
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between">
                <Flex cursor='pointer'>
                    <motion.div whileHover={{rotate: 20}}>
                        <Image src={Logo} h='35px'/>
                    </motion.div>
                    <NavLink to='/' display='flex'>
                        <Heading mt={1} letterSpacing={'tighter'} fontSize={21}>Simone Acuti</Heading>
                    </NavLink>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    flexGrow={1}
                    align='center'
                    ml={28}
                    spacing={8}
                    mt={{ base: 4, md: 0 }}>
                    <NavLink to='/works'>
                        <Link>Projects</Link>
                    </NavLink>
                    <Link href='https://simolinks-5349d.web.app/' isExternal>Links</Link>
                    <Link href='https://github.com/acuti03/simosite' isExternal display='inline-flex'>
                        <Icon as={AiFillGithub} w={6} h={6} mr={1} />
                        Source
                    </Link>
                </Stack>
                <Box flex={1} justifyContent='flex-end' display='flex'>
                    <ThemeButton />

                    <Box ml={1} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline"/>
                            <MenuList>
                                <NavLink to="/works">
                                    <MenuItem>Projects</MenuItem>
                                </NavLink>
                                <Link href='https://simolinks-5349d.web.app/' isExternal>
                                    <MenuItem>Links</MenuItem>
                                </Link>
                                <Link href="https://github.com/acuti03/simosite">
                                    <MenuItem>Source<Icon as={AiFillGithub} w={6} h={6} ml={1}/></MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}


export default Navbar;