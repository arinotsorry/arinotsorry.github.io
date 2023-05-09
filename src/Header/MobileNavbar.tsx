import { Box, Link, Button, Show, Hide, Flex } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import Squiggle from '../Components/Squiggle'
import 'animate.css'

function int_division(a: number, b: number) {
  return (a - (a % b)) / b
}

function StylizedButton(props: any) {
  return (
    <Button
      h='50%'
      w='100%'
      layerStyle={'navbar'}
      bg='transparent'
      fontSize={props.fontSize || 32}
      fontWeight={200}
      fontFamily='edu'
      color='inherit'
      _hover={{}}
      _active={{}}
      {...props}
    >
      {props.text}
    </Button>
  )
}

function MobileButtons(props: any) {

  // calculating the width of the buttons and the width of the space between the buttons
  // 40px is the diameter of the circle, so we do the math based on how many full circles we have
  const num_circles = props.width / 40
  const small_button_width = ((int_division(num_circles + 1, 3) - 1) * 40)
  const large_button_width = small_button_width + (num_circles % 3 === 0 ? 40 : 0)
  const space_between = (num_circles % 3 === 1 ? 2 : 1) * 40

  const AnimatedBox = (width: number, shown: boolean, setShown: (arg0: boolean) => any) => {
    return (
      <Box
        width={width}
        height='50px'
        position='relative'
        top='-64px'
      >
        <Box
          className='thin-animation'
          width='100%'
          height='40px'
          position='relative'
          bg='pale_dogwood.1000'
          top={shown ? '4px' : '-61px'}
        >
          <Squiggle
            top={false}
            bottom={true}
            color={'pale_dogwood.1000'}
            bg={'ultra_violet'}
            width={width}
            top_margin={40}
            zIndex={400}
            offset={true} // maybe change
            left={0}
          />
        </Box >
      </Box>
    )
  }

  const box_props = {
    h: '75px',
    position: 'relative' as const,
    top: '-20px',
    pt: '28px',
    overflow: 'hidden',
    _hover: { color: 'ultra_violet' }
  }

  return (
    <Flex
      gap={0}
      h='100%'
    >
      {/* Projects button */}
      <Link
        as={ReachLink}
        to={'/projects'}>
        <Box
          w={small_button_width + 'px'}
          onMouseEnter={() => props.setProjectShown(true)}
          onMouseLeave={() => props.setProjectShown(false)}
          color={props.projectShown ? 'ultra_violet' : 'isabelline'}
          {...box_props}
        >

          {StylizedButton({
            fontSize: 24,
            text: 'Projects',
            setShown: props.setProjectShown
          })}


          {
            AnimatedBox(small_button_width, props.projectShown, props.setProjectShown)
          }

        </Box>
      </Link>

      {/* Spacer */}
      <Box w={space_between + 'px'} />

      {/* Contacts button */}
      <Box
        w={small_button_width + 'px'}
        onMouseEnter={() => props.setContactShown(true)}
        onMouseLeave={() => props.setContactShown(false)}
        color={props.contactShown ? 'ultra_violet' : 'isabelline'}
        {...box_props}
      >
        <Link
          as={ReachLink}
          to={'/contact'}>
          {StylizedButton({
            fontSize: 24,
            text: 'Contact'
          })}
        </Link>

        {
          AnimatedBox(small_button_width, props.contactShown, props.setContactShown)
        }
      </Box>

      {/* Spacer */}
      <Box w={space_between + 'px'} />

      {/* Downloads button */}
      <Box
        {...box_props}
        w={large_button_width + 'px'}
        onMouseEnter={() => props.setDownloadShown(true)}
        onMouseLeave={() => props.setDownloadShown(false)}
        color={props.downloadShown ? 'ultra_violet' : 'isabelline'}
      >
        {StylizedButton({
          wordWrap: 'break-word',
          whiteSpace: 'normal',
          fontSize: large_button_width <= 160 ? 22 : 24,
          lineHeight: large_button_width <= 160 ? 1 : null,
          text: 'Download Resume',
          top: large_button_width <= 160 ? '-3px' : null,

          onClick: () => {
            props.toast({
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

        {
          AnimatedBox(large_button_width, props.downloadShown, props.setDownloadShown)
        }
      </Box>

    </Flex>
  )
}

export default function MobileNavbar(props: any) {

  /**
   * Creating a navbar button component
   * 
   * @param text the text to be displayed in the button
   * @param shown whether the button's drop-down animation is shown
   * @param setShown state change for button drop down
   * @returns TSX (JSX?) component
   */

  // starting position for navbar container
  const starts = [0, '20px', null]
  const small_width = props.window_width - 20 - ((props.window_width - 20) % 40)

  return (
    <Box
      h={['52px', '52px', null]}
      w={[
        '100%',
        small_width + 'px',
        null
      ]}
      position='absolute'
      top={['14px', '14px', null]}
      zIndex={[100, 100, 600]} // maybe change later to null? or something else
      left={starts}
    >

      <Show above='sm'>
        {MobileButtons({
          width: small_width,
          projectShown: props.projectShown,
          setProjectShown: props.setProjectShown,
          contactShown: props.contactShown,
          setContactShown: props.setContactShown,
          downloadShown: props.downloadShown,
          setDownloadShown: props.setDownloadShown,
          ...props
        })}
      </Show>

      <Hide above='sm'>
        <Flex
          w='100%'
          h='100%'
        >

          {/* Projects */}
          <Box
            w='29%'
            h='100%'
            pt='8px'
            color='isabelline'
          >
            <Link
              as={ReachLink}
              to={'/projects'}>
              {StylizedButton({
                text: 'Projects',
                fontSize: 24
              })}
            </Link>
          </Box>

          {/* Contact */}
          <Box
            w='29%'
            h='100%'
            pt='8px'
            color='isabelline'
          >
            <Link
              as={ReachLink}
              to={'/contact'}>
              {StylizedButton({
                text: 'Contact',
                fontSize: 24
              })}
            </Link>
          </Box>

          {/* Download Resume */}
          <Box
            w='42%'
            h='100%'
            pt='8px'
            color='isabelline'
          >
            {StylizedButton({
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              fontSize: 24,
              text: 'Download Resume',

              onClick: () => {
                props.toast({
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
          </Box>

        </Flex>
      </Hide>

    </Box>
  )
}