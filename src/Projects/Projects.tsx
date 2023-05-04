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

function CardContent(props: any) {
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
        <ListItem fontSize={16}>
          <ListIcon as={FaRegLightbulb} position='relative' top='-2px' color='pale_dogwood.1000' />
          {skills[i]}
        </ListItem>
      )
    }

    return listItems
  }

  function listOfDescriptions(descriptions: Array<string>) {
    let descriptionTexts = []

    for (let i = 0; i < descriptions.length; i++) {
      descriptionTexts.push(
        <Text
          color='isabelline'
          fontSize={16}
        >
          {descriptions[i]}
          {i < descriptions.length - 1 && <br />}
        </Text>
      )
    }

    return descriptionTexts
  }

  return (
    <VStack
      h='100%'
      w='100%'
      p='0px 4px 0px 4px'
      alignItems={'left'}
    >
      {/* First Section */}
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
              pt='2px'
              pl='2px'
              boxSize='48px'
              position='relative'
              top='12px'
              icon={github({ color: 'isabelline', h: '44px', w: '44px' })} />
          </Link>
          :
          (<>
            <IconButton
              aria-label='Open video'
              bg='ultra_violet'
              position='relative'
              top='8px'
              boxSize='48px'
              icon={<PlusSquareIcon color='isabelline' boxSize='44px' />}
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

      {/* Second Section */}
      <Text
        color='isabelline'
        fontSize={22}
        fontWeight={300}
      >
        Skills I used:
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

      <br />

      {/* Third Section */}
      <Text
        color='isabelline'
        fontSize={22}
        fontWeight={300}
      >
        More info:
      </Text>

      {listOfDescriptions(props.descriptions)}

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
          content={CardContent({
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
            descriptions: ['After dipping my toes in the front-end development pool at Zocdoc, ' +
              'I gained the confidence to go for a full swim and develop my own website ' +
              'from scratch. I am particularly proud of all the math and designs behind the ' +
              'squiggle component, which is a strong and consistent motif throughout the page. ' +
              'I am also really fond of a secret surprise hidden throughout all the pages. ' +
              'Need a hint? Look at the image I\'ve got uploaded for the website, and see if you ' +
              'spot anything different.']
          })}
        />
      )
    }
    case Logos.Zocdoc: {
      return (
        <ProjectCard
          src='/Projects/Zocdoc.png'
          opacity={0.85}
          content={CardContent({
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
            descriptions: ['Summer of 2022 I was lucky enough to have the opportunity to work in Manhattan as a ' +
              'software engineering intern at Zocdoc! We spent the first month in seminars about different languages and ' +
              'software (Scala, React, Typescript, testing/TDD, AWS, Git, etc). I appreciate the value of having ' +
              'a baseline recognition-level knowledge of a variety of fullstack tools and technologies, because then I can ' +
              'interpret other people\'s work and have a starting point to support deeper learning.',
            'Once I was placed on a team, I was given tickets to do with fixing bugs found in the page metrics reporting. ' +
            'I had to fix how we retrieved (from an API endpoint) and subsequently stored a booking ID. ' +
            'After ironing those out, I was given my first ever front-end project: redesigning the flow to capture ' +
            'insurance cards. HTML, CSS, and React were totally foreign to me (besides the crash course mentioned earlier), ' +
            'so at first I was very intimidated and felt like a fish out of water. ' +
            'However, I was still excited to challenge myself and round out my knowledge of the tech stack.',
            'I learned how to select premade internal components from the company Storybook, how to customize them, and how ' +
            'to make my own components, accessible to others to use and customize. During my time there, I traced through ' +
            'a stray prop that seemed impossible to trigger, left behind from a previous project. I used DataDog to track page ' +
            'metrics, verifying that the prop had no traffic, and leading to a successful tear-down. ' +
            'I had the opportunity to work with designers and implement their vision as described to me through Figma, going ' +
            'through the entire design process from inception to planning, design review, and eventually a gradual rollout by ' +
            'directing traffic through an Optimizely experiment.'],
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
                {CardContent({
                  title: 'SQL Murder Mystery',
                  href: 'https://github.com/arinotsorry/SQLMurderMystery',
                  skills: [
                    'SQLite',
                    'EER / Schema diagrams',
                    'Markdown',
                    'Deductive reasoning, logic',
                    'Creating intuitive and clear documentation'
                  ],
                  descriptions: ['Knightlab set up a SQL Murder Mystery as an unguided puzzle to use your knowledge ' +
                    'of the schema diagram and SQL to compare the data, solve the mystery, and catch the killer.',
                  'I had been wanting to do this lab for a year or so but was just always too busy with school to sit ' +
                  'down and do it. Well, after graduating in December, I finally found my opportunity! ' +
                  'I figured since I have friends learning SQL as well that I would document my thought process and give ' +
                  'hints, so they could reverse engineer my answers if they needed to.',
                  'I absolutely love trying to figure out murder mysteries, and The Devil Wears Prada is also one of my ' +
                  'favorite movies, so this was an absolute blast all around.'],
                  isOpen: props.isOpen,
                  onOpen: props.onOpen,
                  onClose: props.onClose
                })}
              </Box>
              <Box
                pt='16px'
              >
                {CardContent({
                  title: 'Clue Game Simulator',
                  href: 'https://github.com/arinotsorry/Clue/blob/main/CluePlayer.java',
                  skills: [
                    'Java',
                    'Pattern recognition',
                    'Algorithm implementation',
                    'Naive vs sophisticated heuristics',
                    'OOP Principles (Inheritance, Polymorphism, etc)'
                  ],
                  descriptions: ['Speaking of favorite movies, I totally LOOOOVE this campy 1984 cult classic ' +
                    'starring Tim Curry. However, this project is based on the board game, which I also love. ' +
                    'We had to develop an algorithm for a "smart" automated player to beat the other automated ' +
                    'players moving around randomly and making guesses.',
                  'I developed an algorithm to find either (1) the farthest door the player could get to in one roll, ' +
                  'or if there were no doors within one roll\'s distance, I would find (2) the nearest door from a valid ' +
                  'room (one we didn\'t already eliminate), and walk in as straight a line as possible to the next room.',
                  'Then, move optimally from room to room, eliminating people/tools/rooms and taking advantage of the ' +
                  'distance you can travel for free by leaving out of an alternative door. The smart player wins 95% of ' +
                  'the time, with that other 5% being mostly times where a naive player randomly guesses the correct ' +
                  '"who/where/with what" combination before the smart player has an opportunity to visit the room.'],
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
          content={CardContent({
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
            descriptions: ['Honestly, this is a big work in progress',
              'The end goal is to have a system that takes in the main ingredients, flavors, and textures ' +
              'of a dish and gives you congruent and contrasting pairings to try.',
              'To compare flavors between the food and wine, I needed some kind of database of ' +
              'complementary flavor pairings. Unfortunately, there was no free database that was to my liking, ' +
              'so I took a day and learned how to scrape webpages using Selenium and Beautiful Soup. I gathered data ' +
              'from flavorfox.app, processed it, and wrote an algorithm to insert it into my own original database tables.',
              'So by that point I had flavor information, so I only need wine information. Unfortunately, there was no ' +
              'public free wine database. *Heavy sigh* fiiiine, I\'ll scrape Vivino.com, a website with over 10,000 wines. ' +
              'The Vivino website was such that I could keep scrolling and dynamically generating wine cards, which had links ' +
              'to more detailed pages of each wine. I collected all those links, automated visiting them, and scraped each ' +
              'individual page for wine, winery, vintage, description, notes/note categories (e.g. vanilla, tobacco, and leather ' +
              'are all classified as "oaky" notes), grape varietals, and other information. I automated putting that into my own ' +
              'database, where I can query the notes and descriptions for flavors from the recipe.',
              'My next step is to associate texture/cooking words with wine characteristics (buttery -> heavier body), and use ' +
              'that information (in addition to aforementioned flavor information) to generate a relevancy score for how close ' +
              'of a match the wine is to the flavors provided.'
            ],
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