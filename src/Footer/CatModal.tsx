import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
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

function PicGrid(props: any) {
  const image_props = {
    boxSize: '100%',
    objectFit: 'contain' as const
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
    <Center w='100%'>
      <Grid
        templateColumns='repeat(8, 1fr)'
        templateRows='repeat(19, 1fr)'
        gap={[1, 1, 2, 3, 4, 4]}
      >
        <GridItem {...horizontal} >
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/box.png' />
        </GridItem>

        <GridItem {...vertical} >
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/desk_pillow.png' />
        </GridItem>

        <GridItem {...vertical} >
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/bed_pillow.png' />
        </GridItem>

        <GridItem rowSpan={2} colSpan={2} >
          <Image {...image_props} src='/Midnight Modal Pics/Squares/cushion.png' />
        </GridItem>

        <GridItem {...horizontal} >
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/cats_on_counter.png' />
        </GridItem>

        <GridItem {...horizontal} >
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/curled_up.png' />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <Image {...image_props} src='/Midnight Modal Pics/Squares/makeup_bag.png' />
        </GridItem>

        <GridItem rowSpan={3} colSpan={3} >
          <Image {...image_props} src='/Midnight Modal Pics/Squares/couch.png' />
        </GridItem>

        <GridItem {...horizontal} >
          <Image {...image_props} src='/Midnight Modal Pics/Horizontal/selfie.png' />
        </GridItem>

        <GridItem {...vertical} >
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/explorer.png' />
        </GridItem>

        <GridItem rowSpan={5} colSpan={2} >
          <Image {...image_props} src='/Midnight Modal Pics/Squares/up_close.png' />
        </GridItem>

        <GridItem {...vertical} >
          <Image {...image_props} src='/Midnight Modal Pics/Vertical/website.png' />
        </GridItem>
      </Grid>
    </Center>
  )
}

export default function CatModal(props: any) {
  const body = {
    fontSize: '22px',
    fontWeight: 200,
    color: 'isabelline',
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOverlayClick={props.onClose}
      scrollBehavior='inside'
    >
      <ModalOverlay />
      <Box
        boxShadow='dark-lg'
        bg='ultra_violet'
        borderRadius='20px'
        position='absolute'
        mt='120px'
        p='4px'
        zIndex='2000'
        overflowY='hidden'
        overflowX='hidden'
        h='calc(100vh - 188px)'
        w='90%'
        ml='5%'
      >
        <Box
          h='80px'
          w='80px'
          position='relative'
          left='calc(100% - 80px)'
          zIndex='200'
        >
          <IconButton
            aria-label='Close window'
            m='16px'
            borderRadius='20px'
            bg='transparent'
            onClick={props.onClose}
            _hover={{ bg: 'white_cast' }}
            icon={<CloseIcon color='isabelline' />}
            size='lg' />
        </Box>

        <Box
          w='100%'
          h='100%'
          position='relative'
          zIndex='100'
          top='-80px'
          overflowY='scroll'
          overflowX='hidden'
          color='isabelline'
        >
          <ModalHeader >
            <Text as='b'
              pt='4px'
              fontSize='64px'
              color='isabelline'
              fontFamily='Edu NSW ACT Foundation, sans-serif'
            >
              Congratulations!
            </Text>
          </ModalHeader>
          <Spacer />
          <ModalBody lineHeight={'1'}>

            {/* Text */}
            <Text
              fontSize='40px'
              color='isabelline'
              fontFamily='Edu NSW ACT Foundation, sans-serif'
            >
              Welcome to the Midnight Modal
            </Text>
            <br />
            <Text
              {...body}
              as='i'
              fontFamily='Edu NSW ACT Foundation, sans-serif'
              fontSize='28'
              letterSpacing={1.25}
            >(a categorically pawesome experience)</Text>
            <br /> <br /> <br /> <br />
            <Text
              lineHeight={1.25}
              letterSpacing={1}
              {...body}
            >
              Good job finding this secret button!
              Your reward is access to an exclusive gallery of some of my handsome little gentleman's finest moments, featuring his brother, Frank.
            </Text>
            <br /> <br /> <br /> <br />

            {/* Grid of pictures */}
            <PicGrid {...props} />
          </ModalBody>
        </Box>
      </Box>
    </Modal >
  )
}