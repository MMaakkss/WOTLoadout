import { extendTheme } from '@chakra-ui/react'
import '../assets/style/form.scss'

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          borderRadius: '8px',
          _disabled: {
            cursor: 'not-allowed',
            border: 'none',
            _light: {
              backgroundColor: '#E8E8E8FF',
            },
          },
          _light: {
            backgroundColor: '#ffffff',
            border: '1px solid #E5E6E6',
          },
          _focus: {
            borderColor: 'blue.500',
            boxShadow: '0 0 0 1px blue.500',
          },
          _placeholder: {
            _light: {
              color: '#1F2937',
            },
            fontSize: '14px',
            fontWeight: '500',
          },
        },
      },
      sizes: {
        md: {
          field: {
            height: '48px',
            padding: '14px 16px',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'filled',
      },
    },

    FormLabel: {
      baseStyle: {
        fontWeight: 600,
        fontSize: '14px',
      },
    },

    Button: {
      baseStyle: {
        _light: {
          backgroundColor: '#491EFF',
          color: '#ffffff',
        },
        borderRadius: 'lg',
        _focus: {
          boxShadow: '0 0 0 1px blue.500',
        },
      },
      sizes: {
        md: {
          width: '100%',
          fontWeight: 600,
          fontSize: '14px',
          padding: '24px 16px',
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
    Text: {
      baseStyle: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px',
        marginTop: '24px',
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Inter',
        lineHeight: '20px',
      },
    },
  },
})

export default theme
