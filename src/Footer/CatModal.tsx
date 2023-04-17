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

function PicGrid(props: any) {
  const image_props = {
    boxSize: '100%',
    objectFit: 'contain' as const,
    bg: 'transparent'
  }

  const horizontal = {
    rowSpan: 3,
    colSpan: 5
  }

  const vertical = {
    rowSpan: 5,
    colSpan: 3
  }


  return (
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
        <GridItem {...horizontal} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/box.png' />
        </GridItem>

        <GridItem {...vertical} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/desk_pillow.png' />
        </GridItem>

        <GridItem {...vertical} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/bed_pillow.png' />
        </GridItem>

        <GridItem rowSpan={2} colSpan={2} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Squares/cushion.png' />
        </GridItem>

        <GridItem {...horizontal} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/cats_on_counter.png' />
        </GridItem>

        <GridItem {...horizontal} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/curled_up.png' />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Squares/makeup_bag.png' />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Squares/up_close.png' />
        </GridItem>

        <GridItem {...horizontal} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/selfie.png' />
        </GridItem>

        <GridItem {...vertical} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/explorer.png' />
        </GridItem>

        <GridItem rowSpan={5} colSpan={2} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Squares/couch.png' />
        </GridItem>

        <GridItem {...vertical} bg='transparent'>
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/website.png' />
        </GridItem>
      </Grid>
    </Center>
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
              <PicGrid {...props} />


            </ModalBody>
          </Box>
        </Box>
      </Modal>
    </>
  )
}