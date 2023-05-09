import { Box, Flex, Text, Highlight } from '@chakra-ui/react'
import Carousel from './Carousel'
import { useBreakpointValue } from '@chakra-ui/react';

export default function Home() {

  return (
    <Flex
      wrap='wrap'
      bg='isabelline'
      position='absolute'
      alignContent={['normal', 'normal', 'center']}
      alignItems='center'
      justifyContent={'center'}
      overflowY={useBreakpointValue(['auto', 'auto', 'hidden', 'hidden', 'hidden', 'hidden'])}
      overflowX='hidden'
      mt='0px'
      h='100%'
      pt='16px'
      pb={['32px', '32px', '16px']}
    >
      <Box
        h='400px'
        w={['400px', '480px']}
        pl={[0, '40px', '40px', '80px']}
        position='relative'
      >
        <Carousel size='400px' />
      </Box>

      <Box
        flex={useBreakpointValue([0.95, 0.95, 1])}
        maxH='100%'
        minW={['300px', '300px', '200px']}
        overflowY={useBreakpointValue(['visible', 'visible', 'auto'])}
        pt={['32px', '32px', 0]}
        pl={[0, 0, '16px', '72px', '88px']}
        pr={[0, 0, '16px', '32px', '48px']}
        pb='16px'
      >
        <Text
          pt='4px'
          color='ultra_violet'
          textStyle='navbar'
          textAlign={'left'}
        >
          <Highlight
            query='Hi there! :)'
            styles={{ px: '3', py: '1.5', rounded: '40px', bg: 'pale_dogwood.600', color: 'space_cadet' }}
          >
            Hi there! :)
          </Highlight>
        </Text>
        <br />
        <Text textStyle={'paragraph'}>
          I'm Ariana, a recent Computer Science graduate from Rochester Institute of Technology.
        </Text>
        <Text textStyle={'paragraph'}>
          I have over two years of experience at a few different companies,
          where I've worked on teams using Agile/Scrum management on a variety of full-stack projects.
          I am most familiar with Java, Javascript, Python, Typescript, and React,
          with additional experience in MySQL, Docker/Docker Compose, Ansible, and a variety of other programs, languages, and software.
        </Text>
        <br />
        <Text textStyle={'paragraph'}>
          I'm a lifelong learner and experimentalist - I love trying new things and having new experiences.
          My goal is to become an expert in whatever niche I'm needed in, because I love being "the" person
          to consult for a project or feature.
          I value pursuing well-rounded knowledge with a few deep reservoirs of expertise, so I can contribute
          to broader picture planning while also being active in my area of specialty.
          I love mentorships, and I strive to help contribute to a
          welcoming and friendly workplace where people aren't afraid to share new ideas and be inventive.
        </Text>
        <br />
        <Text textStyle={'paragraph'}>
          In my free time, I love everything that has to do with entertaining -
          cooking, organizing, decorating, arranging, pairing... {'\t'} Well, maybe not the cleaning, but the list goes on.
        </Text><Text textStyle={'paragraph'}>
          I love making charcuterie boards with wine pairings for the birthday parties and board game nights I host with friends.
        </Text>
      </Box>
    </Flex >
  )
}