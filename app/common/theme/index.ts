import { colors } from '@app/common/theme/colors'
import { fonts } from '@app/common/theme/fonts'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    ...colors,
  },
  fonts,
  sizes: {
    4: '.5rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
})

export { theme }
