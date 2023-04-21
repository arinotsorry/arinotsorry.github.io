import { Box, Square, Flex, Text, Highlight } from '@chakra-ui/react'
import Carousel from './Carousel'

export default function Home() {

  return (
    <Flex
      wrap='wrap'
      bg='isabelline'
      position='relative'
      h='100%'
      alignContent={'center'}
      justifyContent={'center'}
      overflow='hidden'>

      <Square bg='transparent' size='400px' m='auto' ml='80px'>
        <Carousel />
      </Square>

      {/* Box for text */}
      <Box
        m='135px 40px 160px'
        mr='0px'
        p='20px'
        pb='0px'
        flex='1'
        bg='transparent'
        h='min(450px, 100%)'
        w='100%'
        ml='40px'
        overflow='auto'
        alignContent={'center'}
      >

        <Text textStyle='navbar' textAlign={'left'}>
          <Highlight
            query='Hi there! :)'
            styles={{ px: '4', py: '2', rounded: '40px', bg: 'pale_dogwood' }}
          >
            Hi there! :)
          </Highlight>
        </Text>
        <br />
        <br />
        <Text bg='transparent' color='space_cadet' lineHeight={2}>
          I'm Ari, a recent Computer Science (<Text bg='transparent' as={'i'}>under</Text>)grad from RIT.
        </Text>
        <Text bg='transparent' color='space_cadet' lineHeight={2}>
          I have over two years of experience at a few different companies, where I've worked on a variety of full-stack projects.
        </Text>
        <br />
        <Text bg='transparent' color='space_cadet' lineHeight={2}>
          I'm a lifelong learner and eager to try new things. My goal is to become an expert in whatever niche I'm needed in,
          <br />
          because I love being "the" person to consult about <Text bg='transparent' as='i'>something</Text>.
        </Text>
        <br />
        <Text bg='transparent' color='space_cadet' lineHeight={2}>
          In my free time, I love everything that has to do with entertaining -
          cooking, organizing, decorating, arranging, pairing...
        </Text>
        <Text bg='transparent' color='space_cadet' lineHeight={2}>
          Well, maybe not the cleaning, but the list goes on.
        </Text><Text bg='transparent' color='space_cadet' lineHeight={2}>
          I love making charcuterie boards with wine pairings for the birthday parties and board game nights I host with friends.
        </Text>
      </Box>
    </Flex >
  )
}