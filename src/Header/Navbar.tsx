import { Box, Link, Button, Show } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import Squiggle from '../Components/Squiggle'
import 'animate.css'

function ButtonContainer(text: string, shown: boolean, setShown: (arg0: boolean) => any, useSquiggleWidths: (arg0: string) => any, toast: any) {
  const button = (props: any) => {
    return (
      <Button
        h='50%'
        w='100%'
        top='44px' // this will change
        layerStyle={'navbar'}
        bg='transparent'
        fontSize={32}
        fontWeight={200}
        color='inherit'
        _hover={{}}
        _active={{}}
        {...props}
      >
        {text}
      </Button>
    )
  }

  const get_left_positions = () => {
    if (text === 'Download Resume') {
      return [null, null, '320px', '320px', '480px', '640px']
    }
    if (text === 'Contact') {
      return [null, null, '160px', '160px', '240px', '320px']
    }
    if (text === 'Projects') {
      return 0
    }

  }
  const left_positions = get_left_positions()

  const AnimatedBox = (text: string, shown: boolean) => {
    return (
      <Box
        className='animation'
        width='100%'
        position='absolute'
        bottom={shown ? '2px' : '120px'} // TODO: fix later
      >
        <Squiggle
          top={false}
          bottom={true}
          color={'ultra_violet'}
          bg={'pale_dogwood.1000'}
          width={useSquiggleWidths(text)}
          top_margin={90}
          zIndex={400}
          offset={true}
          left={0}
        />

        <Box
          width='100%'
          height='140px'
          position='absolute'
          bottom='30px'
          bg='ultra_violet'
          zIndex='1000'
        />
      </Box >
    )
  }

  return (
    /* outer container, holding both button and animation */
    < Box
      w={text === 'Download Resume' ?
        [null, null, '120px', '240px', '320px', '400px'] :
        [null, null, '120px', '120px', '200px', '280px']}
      h='148px'
      top='-20px'
      textStyle='navbar'
      position='absolute'
      left={left_positions}
      color={shown ? 'isabelline' : 'ultra_violet'}
      _hover={{ color: 'isabelline' }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {/* animated drop-down box */}
      {AnimatedBox(text, shown)}

      {/* actual button */}
      {text === 'Download Resume' ? (
        <Link
          href='/Ariana Wisenburn Resume.pdf'
          download='Ariana Wisenburn Resume'
          isExternal>
          {button({
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            onClick: () => {
              toast({
                title: 'Congratulations!',
                description: 'This is the best decision you\'ve made all day 😎',
                status: 'success',
                isClosable: true,
                colorScheme: 'medium_sage',
                duration: '60000',
                containerStyle: {
                  backgroundColor: 'medium_sage',
                  border: '1px',
                  borderColor: 'dark_sage',
                  borderRadius: '20px',
                  color: 'green'
                }
              })
            }
          })}
        </Link>
      ) : (
        <Link
          as={ReachLink}
          to={'/' + text.toLowerCase()}>
          {button({})}
        </Link>
      )}
    </Box >
  )
}

export default function Navbar(props: any) {

  const useSquiggleWidths = (text: string) => {
    return useBreakpointValue({
      'base': null,
      'sm': null,
      'md': 120,
      'lg': text === 'Download Resume' ? 240 : 120,
      'xl': text === 'Download Resume' ? 320 : 200,
      '2xl': text === 'Download Resume' ? 400 : 280
    })
  }

  /**
   * Creating a navbar button component
   * 
   * @param text the text to be displayed in the button
   * @param shown whether the button's drop-down animation is shown
   * @param setShown state change for button drop down
   * @returns TSX (JSX?) component
   */

  // calculates starting position for the navbar button container
  const calculate_start = () => {
    let quotient = Math.floor(props.window_width / 40)
    if (40 * quotient + 20 > props.window_width)
      quotient -= 1
    const r = 40 * quotient + 20 // this is the px position of the last full circle - rightmost end

    return [null, null, r - 440 + 'px', r - 560 + 'px', r - 800 + 'px', r - 1040 + 'px']
  }
  const starts = calculate_start()

  return (
    <Show above='md'>
      <Box h='100%' w={[null, null, '440px', '560px', '800px', '1040px']} position='absolute' left={starts}>
        {ButtonContainer('Projects', props.projectShown, props.setProjectShown, useSquiggleWidths, props.toast)}
        {ButtonContainer('Contact', props.contactShown, props.setContactShown, useSquiggleWidths, props.toast)}
        {ButtonContainer('Download Resume', props.downloadShown, props.setDownloadShown, useSquiggleWidths, props.toast)}
      </Box>
    </Show>
  )
}