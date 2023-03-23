import { Divider } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'

import Navigation from './Navigation'

function Header() {
  const HeadingItem = styled(GridItem)`
    w: 100%;
    h: 20;
    textAlign: center;
    margin: auto;
  `;

  const ResumeButton = styled(Button)`
    variant: solid;
    size='lg';
    position: 'relative';
    left: '0'; 
    h: 20; 
    margin: auto; 
    padding: 20px;
  `;

  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={'10'} textAlign='center'>

        <HeadingItem padding='15px'>
          <Heading>
            Ari Wisenburn
          </Heading>
        </HeadingItem>

        <HeadingItem>
          <Navigation />
        </HeadingItem>

        <HeadingItem>
          <ResumeButton>
            <a href='src/components/Header/Ari Wisenburn Resume.pdf' download>
              <Text align='end'>
                Download Resume
              </Text>
            </a>
          </ResumeButton>
        </HeadingItem>

      </Grid>
      <Divider />
    </div>
  )
}

export default Header