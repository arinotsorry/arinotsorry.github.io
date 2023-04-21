import { Box, Square, Flex, Text, Highlight } from '@chakra-ui/react'
import { useFlexboxHeight } from '../PageContainer/PageContainer'
import Carousel from './Carousel'

export default function Home() {

  return (
    <Flex
      wrap='wrap'
      bg='isabelline'
      position='relative'
      h='100%'
      alignContent={'center'}
      alignItems='center'
      justifyContent={'center'}
      overflow='hidden'>

      <Square bg='transparent' size='400px' m='auto' ml='80px'>
        <Carousel />
      </Square>

      {/* Box for text */}
      <Box
        ml='40px'
        mr='0px'
        pl='10px'
        pr='10px'
        flex='1'
        bg='transparent'
        h='100%'
        w='100%'
        overflow='auto'
      >
        <Box
          mt={'max(' + (useFlexboxHeight() - 475) / 2 + 'px, 0px)'}
          bg='transparent'
          position='relative'
          pt='10px'
          h='min(475px, 100%)'
        >
          <Text textStyle='navbar' textAlign={'left'}>
            <Highlight
              query='Hi there! :)'
              styles={{ px: '4', py: '1', rounded: '40px', bg: 'pale_dogwood' }}
            >
              Hi there! :)
            </Highlight>
          </Text>
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
            cooking, organizing, decorating, arranging, pairing... {'\t'} Well, maybe not the cleaning, but the list goes on.
          </Text><Text bg='transparent' color='space_cadet' lineHeight={2}>
            I love making charcuterie boards with wine pairings for the birthday parties and board game nights I host with friends.
          </Text>
        </Box>
      </Box>
    </Flex >
  )
}