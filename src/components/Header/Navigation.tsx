
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import styled from 'styled-components'
import './Navigation.css'

const PageButton = defineStyle({
  color: `brand.200`,
  fontFamily: 'serif',
  fontWeight: 'normal',
  variant: 'ghost',
  colorscheme: 'brand.400',
  size: 'lg',
  margin: 'auto',
  padding: '20px',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'orange.300',
    color: 'orange.800',
  }
})

function Navigation() {
  return (
    <nav>
      <ButtonGroup gap={'4'}>
        <Button variant='PageButton'>
          <NavLink to='/'>
            <Text margin='auto'> Home </Text>
          </NavLink>
        </Button>

        <Spacer />

        <Button variant='PageButton'>
          <NavLink to='/projects'>
            <Text margin='auto'> Projects </Text>
          </NavLink>
        </Button>

        <Spacer />

        <Button variant='PageButton'>
          <NavLink to='/contact'>
            <Text margin='auto'> Contact </Text>
          </NavLink>
        </Button>
      </ButtonGroup>
    </nav >

  )
}

export default Navigation
export const buttonTheme = defineStyleConfig({
  variants: { PageButton },
})