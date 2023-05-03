import {
  Box,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Center,
  Flex,
  Spacer,
  Link,
  IconButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { FaRegLightbulb } from 'react-icons/fa'

import ProjectCard from './ProjectCard'
import { github } from '../Components/Icons'
import VideoModal from './VideoModal'


enum Logos {
  Website,
  Zocdoc,
  Clue,
  Wine
}

function CardText(props: any) {
  /**
   * title
   * href
   * onClick
   * skills
   * description
   */

  function listOfSkills(skills: Array<string>) {
    let listItems = []

    for (let i = 0; i < skills.length; i++) {
      listItems.push(
        <ListItem>
          <ListIcon as={FaRegLightbulb} position='relative' top='-2px' color='pale_dogwood.1000' />
          {skills[i]}
        </ListItem>
      )
    }

    return listItems
  }

  return (
    <VStack
      h='100%'
      w='100%'
      p='0px 4px 0px 4px'
      alignItems={'left'}
    >
      {/* First Row */}
      <Flex w='100%'>

        {/* Title */}
        <Text
          fontFamily='Edu NSW ACT Foundation, sans-serif'
          fontSize='40px'
          color='pale_dogwood.1000'>
          {props.title}
        </Text>

        <Spacer />

        {/* Icon */}
        {props.href ?
          <Link href={props.href} isExternal>
            <IconButton
              _hover={{
                bg: 'white_cast',
              }}
              aria-label='Github'
              bg='ultra_violet'
              pl='1px'
              pt='1px'
              position='relative'
              top='12px'
              icon={github({ color: 'isabelline', h: '35px', w: '35px' })} />
          </Link>
          :
          (<>
            <IconButton
              aria-label='Open video'
              bg='ultra_violet'
              position='relative'
              top='8px'
              icon={<PlusSquareIcon color='isabelline' boxSize='60%' />}
              _hover={{
                bg: 'white_cast'
              }}
              onClick={props.onOpen}
            />
            <VideoModal
              isOpen={props.isOpen}
              onOpen={props.onOpen}
              onClose={props.onClose}
            />
          </>)
        }
      </Flex>

      {/* Second Row */}
      <Text
        color='isabelline' // maybe pale_dogwood.1000
        fontSize='20px'
        fontWeight={300}
      >
        Skills I developed:
      </Text>

      {/* Split list of skills in half */}
      <HStack>
        <List
          w='50%'
          spacing={1}
          color='isabelline'
        >
          {listOfSkills(props.skills.slice(0, (props.skills.length + 1) / 2))}
        </List>
        <List
          w='50%'
          spacing={1}
          color='isabelline'
        >
          {listOfSkills(props.skills.slice((props.skills.length + 1) / 2))}
        </List>
      </HStack>
    </VStack>
  )
}

function Card(props: any) {
  /** Props:
   * logo: number
   * onOpen: function
   */
  switch (props.logo) {
    case Logos.Website: {
      return (
        <ProjectCard
          src='/Projects/Website.png'
          shadow='md'
          opacity={0.85}
          content={CardText({
            title: 'Website',
            href: 'https://github.com/arinotsorry/arinotsorry.github.io',
            skills: [
              'React',
              'Typescript',
              'Node.js',
              'npm',
              'Algebraic formula creation for component scalability',
              'Git',
              'CI/CD pipeline through Github Actions',
              'UI Libraries (Chakra)',
              'Firebase hosting'
            ],
            description: 'This is description text'
          })}
        />
      )
    }
    case Logos.Zocdoc: {
      return (
        <ProjectCard
          src='/Projects/Zocdoc.png'
          opacity={0.85}
          content={CardText({
            title: 'Zocdoc',
            skills: [
              'React',
              'Typescript',
              'Jira / Agile development',
              'Git',
              'Node.js',
              'Storybook',
              'Optimizely A/B experiments',
              'Datadog / Website metrics',
              'Cypress testing',
              'Unit testing'
            ],
            description: 'This is description text',
            isOpen: props.isOpen,
            onOpen: props.onOpen,
            onClose: props.onClose
          })}
        />
      )
    }
    case Logos.Clue: {
      return (
        <ProjectCard
          src='/Projects/Clue.jpg'
          shadow='md'
          content={
            <>
              <Text
                fontFamily='Edu NSW ACT Foundation, sans-serif'
                color='isabelline'
                fontSize='36px'
                textAlign={'center'}
                pb='32px'
              >
                I actually have two murder mystery themed projects:
              </Text>
              <Box>
                {CardText({
                  title: 'SQL Murder Mystery',
                  href: 'https://github.com/arinotsorry/SQLMurderMystery',
                  skills: [
                    'SQLite',
                    'EER / Schema diagrams',
                    'Markdown',
                    'Deductive reasoning, logic',
                    'Creating intuitive and clear documentation'
                  ],
                  description: 'This is description text',
                  isOpen: props.isOpen,
                  onOpen: props.onOpen,
                  onClose: props.onClose
                })}
              </Box>
              <Box
                pt='16px'
              >
                {CardText({
                  title: 'Clue Game Simulator',
                  href: 'https://github.com/arinotsorry/Clue/blob/main/CluePlayer.java',
                  skills: [
                    'Java',
                    'Pattern recognition',
                    'Algorithm implementation',
                    'Naive vs sophisticated heuristics',
                    'OOP Principles (Inheritance, Polymorphism, etc)'
                  ],
                  description: 'This is description text',
                  isOpen: props.isOpen,
                  onOpen: props.onOpen,
                  onClose: props.onClose
                })}
              </Box>
            </>
          }
        />
      )
    }
    case Logos.Wine: {
      return (
        <ProjectCard
          src='/Projects/Wine.png'
          content={CardText({
            title: 'Wine & Food Pairing',
            href: 'https://github.com/arinotsorry/WinePairing',
            skills: [
              'MySQL',
              'Python',
              'Web scraping with Beautiful Soup and Selenium',
              'Algorithm and heuristic creation',
              'Git',
              'NLP for data cleansing/preparation',
              'Wine and food pairing knowledge (though more experimentation is needed...)'
            ],
            description: 'This is description text',
            isOpen: props.isOpen,
            onOpen: props.onOpen,
            onClose: props.onClose
          })}
        />
      )
    }
  }
}

function Rows(props: any) {
  const minH = 200
  const container = {
    w: '50%',
    h: '100%',
    minH: minH + 'px'
  }

  return (
    <VStack
      w='calc(100% - 20px)'
      ml='20px'
      h='100%'
      position='relative'
      overflow='hidden'
    >
      <HStack
        w='100%'
        h='49%'
        spacing='4px'
      >
        <Box {...container} >
          {Card({ logo: Logos.Website })}
        </Box>
        <Box {...container} >
          {Card({
            logo: Logos.Zocdoc,
            isOpen: props.isOpen,
            onOpen: props.onOpen,
            onClose: props.onClose
          })}
        </Box>
      </HStack>

      <HStack
        w='100%'
        h='49%'
        spacing='4px'
      >
        <Box {...container} >
          {Card({ logo: Logos.Clue })}
        </Box>
        <Box {...container} >
          {Card({ logo: Logos.Wine })}
        </Box>
      </HStack>
    </VStack>
  )
}

function Column(props: any) {
  const minH = 200
  const container = {
    w: '100%',
    h: '100%',
    minH: minH + 'px'
  }

  return (
    <VStack
      w='100%'
      h='100%'
      position='relative'
      overflow='hidden'
    >
      <Box {...container} >
        {Card({ logo: Logos.Website })}
      </Box>
      <Box {...container} >
        {Card({
          logo: Logos.Zocdoc,
          isOpen: props.isOpen,
          onOpen: props.onOpen,
          onClose: props.onClose
        })}
      </Box>
      <Box {...container} >
        {Card({ logo: Logos.Clue })}
      </Box>
      <Box {...container} >
        {Card({ logo: Logos.Wine })}
      </Box>
    </VStack>
  )
}

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const gridDisplay = useBreakpointValue([false, false, true])

  return (
    <VStack
      pt='32px'
      pb='8px'
      h='100%'
      minH={['1080px', '1080px', '512px']}
    >
      {gridDisplay ?
        <Rows
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
        :
        <Column
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />

      }

      {/* This becomes 2 lines smaller than the 'md' breakpoint, 
      so we can set it to a consistent size and deal with the smaller version formatting later */}
      <Center
        fontSize={18}
        textAlign='center'
        p='4px'
      >
        <Text>
          You can check out more projects on my Github profile, linked in the footer
        </Text>
      </Center>
    </VStack>
  )
}