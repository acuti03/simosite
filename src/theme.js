import { extendTheme, textDecoration, useColorModeValue } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


const styles = {
    global: props => ({
      body: {
        bg: mode('#f0e7db', '#202023')(props)
      }
    })
  }

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const components = {
    Heading: {
      variants: {
        'title': {
          textDecoration: 'underline',
          fontSize: 27,
          textUnderlineOffset: 7,
          textDecorationColor: '#525252',
          textDecorationThickness: 4,
          mb: 5
        },
      }
    },
    Link: {
      variants:{
        'link': props => ({
          color: mode('purple.600', 'orange.200')(props),
          textUnderlineOffset: 3,
        })
      }
    },
    Text: {
      variants:{
        'works': {
          fontFamily:"'M PLUS Rounded 1c'",
          fontWeight: '800',
          fontSize: 18
        }
      }
    }
}


const theme = extendTheme({ config, styles, fonts, components})
export default theme