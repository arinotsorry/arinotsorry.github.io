import { Box, Link, Button, Show } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import Squiggle from '../Components/Squiggle'
import 'animate.css'

export default function Navbar(props: any) {

  const lg_button = [null, null, 120, 240, 320, 400] // Download Resume button
  const sm_button = [null, null, 120, 120, 200, 280] // Projects and Contact button

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
  const button_container = (text: string, shown: boolean, setShown: (arg0: boolean) => any, useSquiggleWidths: (arg0: string) => any) => { // TODO: check: google how to 

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

    /**
     * 
     * @returns the right position of the overall/outermost navbar button container
     */
    const get_left_positions = () => {
      if (text === 'Download Resume') {
        return [null, null, '320px', '320px', '480px', '640px'] // left border
      }
      if (text === 'Contact') {
        return [null, null, '160px', '160px', '240px', '320px'] // right border
      }
      if (text === 'Projects') {
        return 0
      }

    }
    const left_positions = get_left_positions()

    const AnimatedBox = (text: string, shown: boolean, setShown: (arg0: boolean) => any) => {

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
            bg={'pale_dogwood'}
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
            border='1px'
            borderColor='white'
            bg='ultra_violet'
            zIndex='1000'
          ></Box>
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
        _hover={{ color: 'isabelline' }}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {/* animated drop-down box */}
        {AnimatedBox(text, shown, setShown)}

        {/* actual button */}
        {text === 'Download Resume' ? (
          <Link
            href='/Ari Wisenburn Resume.pdf'
            download='Ari Wisenburn Resume'
            isExternal>
            {button({
              wordWrap: 'break-word',
              whiteSpace: 'normal',
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

  // const animated_box = () => {
  //   const all_squiggles = {
  //     top: false,
  //     bottom: true,
  //     color: 'ultra_violet',
  //     bg: 'pale_dogwood',
  //     top_margin: 90, // remove later
  //     zIndex: 400,
  //     offset: false
  //   }
  //   const animation_color_fill = {
  //     width: '100%',
  //     height: '100px',
  //     top: '0px',
  //     bg: 'ultra_violet',
  //     zIndex: '1000'
  //   }
  // }

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
      {/* <Box border='1px' borderColor='blue' h='100px' w='100%' mt='0px' position='absolute' overflow='hidden'> */}
      <Box h='100%' w={[null, null, '440px', '560px', '800px', '1040px']} position='absolute' left={starts}>
        {button_container('Projects', props.projectShown, props.setProjectShown, useSquiggleWidths)}
        {button_container('Contact', props.contactShown, props.setContactShown, useSquiggleWidths)}
        {button_container('Download Resume', props.downloadShown, props.setDownloadShown, useSquiggleWidths)}
      </Box>
      {/* </Box> */}
    </Show>
  )
}