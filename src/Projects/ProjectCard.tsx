import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Squiggle from '../Components/Squiggle'
import 'animate.css'
import useWindowDimensions from '../Hooks/useWindowDimensions'
import { Quadrants } from './Projects'

const lorem = ' He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life.\
Debbie knew she was being selfish and unreasonable.She understood why the others in the room were angry and frustrated with her and the way she was acting.In her eyes, it didn\'t really matter how they felt because she simply didn\'t care.\
  She\'s asked the question so many times that she barely listened to the answers anymore. The answers were always the same. Well, not exactly the same, but the same in a general sense. A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, "What\'s your favorite animal ? " But this time was different. When she heard the young boy\'s answer, she wondered if she had heard him correctly.'

export default function ProjectCard(props: any) {
  /**
   * props:
   */

  const [hover, setHover] = useState(false)
  // set hover true for hovering over the initial icon and the animation box
  const width = useWindowDimensions().width

  const squiggle_r = (width / 2) - (((width / 2) - 2) % 40) - 2 + 'px'
  const squiggle_c = (width - (width % 40)) - 40 + 'px'

  return (
    <>
      <Box
        w='100%'
        h='100%'
        bg='transparent'
        overflow='visible'
      >

        <Box
          className='animation'
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
          className='animation'
          transitionDuration='0.5s'
          w='100%'
          h='30px'
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
            fill={true}
          />
        </Box>


        {/* Bottom squiggle */}
        <Box
          bg='ultra_violet'
          className='animation'
          transitionDuration={'0.75s'}
          h='calc(100% - 10px)'
          position='relative'
          top={hover ? '-20px' : 'calc(-100% - 40px)'}
          zIndex={100}
        >
          <Box
            p='48px 4px 0px'
            h='calc(100% - 30px)'
            overflowY='scroll'
          >
            <Text
              color='white'
            >
              {props.description || lorem}
            </Text>
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
              fill={true}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}