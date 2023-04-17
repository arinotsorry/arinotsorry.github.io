import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Spacer,
  Box,
  Text,
  IconButton,
  Grid,
  GridItem,
  Center,
  Image
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

function CatModal(props: any) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered onOverlayClick={props.onClose}>
      <ModalOverlay />
      <ModalContent>

        <ModalHeader>Congratulations, you found the Midnight Modal!</ModalHeader>
        <ModalCloseButton />

        <ModalBody>You lucky duck, you clicked the secret cat! Now, as a reward, you get to meet my handsome boy</ModalBody>

        <ModalFooter>
          <Button colorScheme='ultra_violet' variant='solid' bg='rose_quartz' onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default function BasicUsage(props: any) {
  const width = 850

  const modal_header = {
    fontSize: '32px',
    bg: 'transparent'
  }

  const welcome = {
    fontSize: '28px',
    bg: 'transparent'
  }

  const body = {
    fontSize: '20px',
    bg: 'transparent'
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} onOverlayClick={props.onClose} scrollBehavior='inside'>
        <ModalOverlay bg='transparent' />

        <Box bg='ultra_violet' borderRadius='20px' position='absolute' width={width + 'px'} mt='8%' ml={(props.window_width - width) / 2 + 'px'} p='4px' zIndex='100000'>
          <Box h='80px' w='80px' position='absolute' ml='770px' bg='transparent'>
            <IconButton
              aria-label='Close window'
              m='16px'
              bg='transparent'
              borderRadius='20px'
              onClick={props.onClose}
              icon={<CloseIcon bg='transparent' />}
              size='lg' />
          </Box>

          <Box w='100%' h='600px' overflow='scroll' bg='transparent'>
            <ModalHeader bg='transparent'>
              <Text as='b' {...modal_header}>
                Congratulations!
              </Text>
            </ModalHeader>
            <Spacer bg='transparent' />
            <ModalBody bg='transparent' lineHeight={'1'}>

              {/* Text */}
              <Text {...welcome}>Welcome to the Midnight Modal</Text>
              <br />
              <Text as='i' {...body}>(a categorically pawesome experience)</Text>
              <br /> <br /> <br /> <br />
              <Text {...body}>Good job finding this secret button!
                Your reward is access to an exclusive gallery of my handsome little gentleman's best moments.
              </Text>
              <br /> <br /> <br /> <br />

              {/* Grid of pictures */}
              <Center bg='transparent'>
                <Grid
                  templateColumns='repeat(8, 1fr)'
                  templateRows='repeat(19, 1fr)'
                  gap={4}
                  bg='transparent'
                  h='1900px'
                  w='800px'
                  overflow={'scroll'}
                >
                  <GridItem rowSpan={3} colSpan={5} bg='tomato'>
                    <Image src='./Midnight Modal Pictures/Horizontal/IMG_6349.png' ></Image>
                  </GridItem>
                  <GridItem rowSpan={5} colSpan={3} bg='orange'></GridItem>
                  <GridItem rowSpan={5} colSpan={3} bg='gold'></GridItem>
                  <GridItem rowSpan={2} colSpan={2} bg='green'></GridItem>
                  <GridItem rowSpan={3} colSpan={5} bg='skyblue'></GridItem>
                  <GridItem rowSpan={3} colSpan={5} bg='purple'></GridItem>
                  <GridItem rowSpan={3} colSpan={3} bg='tomato'></GridItem>
                  <GridItem rowSpan={3} colSpan={3} bg='orange'></GridItem>
                  <GridItem rowSpan={3} colSpan={5} bg='gold'></GridItem>
                  <GridItem rowSpan={5} colSpan={3} bg='green'></GridItem>
                  <GridItem rowSpan={5} colSpan={2} bg='skyblue'></GridItem>
                  <GridItem rowSpan={5} colSpan={3} bg='violet'></GridItem>
                </Grid>
              </Center>


            </ModalBody>
          </Box>
        </Box>
      </Modal>
    </>
  )
}