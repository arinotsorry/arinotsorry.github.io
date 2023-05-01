import { Box, Flex, Text, VStack } from '@chakra-ui/react'

export default function Projects(props: any) {
  return (
    <Flex direction='column'>
      <Flex direction={['column', 'column', 'row']}>
        <Box bg='tomato' w='400px' h='400px' />
        <Box bg='orange' w='400px' h='400px' />
      </Flex>

      <Flex direction={['column', 'column', 'row']}>
        <Box bg='sage' w='400px' h='400px' />
        <Box bg='cornflowerblue' w='400px' h='400px' />
      </Flex>
    </Flex >
  )
}