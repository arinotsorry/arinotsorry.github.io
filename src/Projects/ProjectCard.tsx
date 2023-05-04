import { Box, Center, Image } from '@chakra-ui/react'
import { useState } from 'react'
import Squiggle from '../Components/Squiggle'
import './Projects.css'
import 'animate.css'
import useWindowDimensions from '../Hooks/useWindowDimensions'

export default function ProjectCard(props: any) {
  /**
   * props:
   */

  const [hover, setHover] = useState(false) // change

  // set hover true for hovering over the initial icon and the animation box
  const width = useWindowDimensions().width
  const squiggle_r = (width / 2) - (((width / 2) - 2) % 40) - 44 + 'px'
  const squiggle_c = (width - (width % 40)) - 40 + 'px'

  return (
    <>
      <Box
        w='100%'
        h='100%'
        bg='transparent'
        overflow='visible'
      >
        <Center
          id='projectCard'
          w={[squiggle_c, squiggle_c, squiggle_r]}
          h='calc(100% - 32px)'
          ml={['20px', '20px', 0]}
        >

          <Center h='100%'>
            <Image
              objectFit={'contain'}
              borderRadius='20px'
              h='100%'
              src={props.src}
              shadow={props.shadow || 0}
              opacity={props.opacity || 1}
            />
          </Center>

        </Center>

        <Box
          className={hover ? 'topUp' : 'topDown'}
          w='100%'
          h='100%'
          bg='transparent' // change to isabelline later
          position='relative'
          top={hover ? 0 : '-100%'}
        />
      </Box>

      {/* Container for squiggles within animation and text */}
      {/* Also center clickable image/logo in this box*/}
      <Box
        w={[squiggle_c, squiggle_c, squiggle_r]}
        left={['20px', '20px', 0]}
        h='100%'
        top='calc(-100% - 1px)'
        overflow='hidden'
        position='relative'
        zIndex='800'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        {/* Top squiggle */}
        <Box
          className={hover ? 'topDown' : 'topUp'}
          w='100%'
          h='28px'
          bg='isabelline'
          mt='-20px'
          position='relative'
          top={hover ? 0 : '-20px'}
          zIndex={400}
        >
          <Squiggle
            top={false}
            bottom={true}
            color='isabelline'
            bg='ultra_violet'
            left={0}
            width={1}
            zIndex={100}
            offset={true}
            fill={false}
          />
        </Box>


        {/* Bottom squiggle */}
        <Box
          bg='ultra_violet'
          className={hover ? 'bottomDown' : 'bottomUp'}
          h='calc(100% - 10px)'
          position='relative'
          top={hover ? '-20px' : 'calc(-100% - 40px)'}
          zIndex={100}
        >
          <Box
            p='48px 4px 0px'
            h='calc(100% - 20px)'
            overflowY='auto'
            className='scrollBox'
          >
            {props.content}
          </Box>
          <Box
            position='relative'
            top='0'
          >

            <Squiggle
              top={false}
              bottom={true}
              color='ultra_violet'
              bg={props.bg || 'isabelline'}
              left={0}
              width={1}
              zIndex={100}
              offset={true}
              fill={false}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}