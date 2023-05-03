import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  AspectRatio
} from '@chakra-ui/react'

export default function VideoModal(props: any) {
  return (
    < Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={['2xl', '2xl', '2xl', '3xl', '4xl', '4xl']}
      allowPinchZoom={true}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent
        bg='ultra_violet'
        borderRadius='20px'
        pb='16px'
        color='isabelline'
      >
        <ModalHeader
          fontFamily={'sans-serif'}
          fontWeight={200}
          fontSize='24px'
          w='calc(100% - 16px)'
        >Here's a closer look of me going through the flow I made:</ModalHeader>
        <ModalCloseButton
          size='80px'
          m='4px'
          p='12px'
          borderRadius='20px'
          _hover={{
            bg: 'white_cast'
          }}
        />
        <ModalBody>
          <Center
            w='100%'
            borderRadius='20px'
            overflow='hidden'>
            <AspectRatio ratio={16 / 9} w='100%' minW='100px'>
              <iframe
                title='Insurance Card Capture Flow'
                src='/Projects/Insurance Card Capture Flow.mp4'
                allowFullScreen
              />
            </AspectRatio>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal >
  )
}