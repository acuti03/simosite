import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion }  from 'framer-motion'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  const [rotate, setRotate] = React.useState(false)

  return (
    <motion.div
      animate={{rotate : rotate ? 360 : 0}} 
      onClick={() => {setRotate(!rotate)}}>
      <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon/>, <SunIcon />)}
          onClick={toggleColorMode}/>
    </motion.div>
  )
}

export default ThemeButton