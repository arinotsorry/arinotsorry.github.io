import { Square, Circle, Box } from '@chakra-ui/react'
import useWindowDimensions from '../Hooks/useWindowDimensions';

function getLittleCircle(pos: number, color: string, top: boolean) {
  let top_offset = 28
  if (top) {
    top_offset = 6
  }

  return (
    <Square position='absolute' left={pos + 'px'} top={top_offset + 'px'} size='6px' bg='transparent' zIndex='350'>
      <Circle size='6px' bg={color} zIndex='400'></Circle>
    </Square>
  )
}

function getBigCircle(pos: number, color: string) {
  return (
    <Square position='absolute' left={pos + 'px'} size='40px' bg='transparent' zIndex='250'>
      <Circle size='40px' bg={color} zIndex='300'></Circle>
    </Square>
  )
}

function getCircleStartingPixel(start: number) {
  // where the first full circle will begin
  // every circle begins at 40n-20
  let modulus = start % 40
  if (modulus < 17) {
    // big circle starting at -20
    return -20
  }
  else if (modulus > 23) {
    // big circle starting at 20
    return 20
  }
  else {
    // small circle starting at 17
    return 17
  }
}

export default function Squiggle(props: any) {
  /**
   * props:
   * 
   * left_margin: distance from left, in px
   * top_margin: distance from top of circle to top of page
   * top: t/f. Whether there are squiggles on top
   * bottom: t/f. Whether there are squiggles on the bottom
   * color: color of the scallops
   * bg: color of the background
   * start: starting x pixel of the box
   * width?: width of the box - default useWindowDimensions().width
   * width_percentage?: between 0.0 and 1.0, overrides width
   */

  // can't call hooks conditionally, so instead I'm setting a box_width var to the appropriate value
  let box_width = useWindowDimensions().width

  //let  = { height, width }
  if (props.width_percentage) {
    box_width = props.width_percentage * box_width
  }
  else if (props.width) {
    box_width = props.width
  }

  // getting the starting position of the first circle
  let circle_start = getCircleStartingPixel(props.start)

  // making the string of circles - we will add the box later
  let big = !(circle_start === 17) // boolean, whether we are on the big circle
  let html = []
  let pixel = circle_start

  while (pixel < props.start + box_width) {
    if (big) {
      html.push(getBigCircle(pixel, props.color))
      pixel += 37
    }
    else {
      // little circle
      if (props.top) {
        html.push(getLittleCircle(pixel, props.bg, true))
      }
      if (props.bottom) {
        html.push(getLittleCircle(pixel, props.bg, false))
      }
      pixel += 3
    }
    big = !big
  }

  let box_properties = {
    width: box_width,
    height: props.top ? (props.bottom ? ('20px') : ('30px')) : (props.top_margin + 30) + 'px',
    position: 'absolute' as const,
    left: '0px',
    top: props.top ? '10px' : (-1 * props.top_margin) + 'px',
    bottom: props.top ? '' : '-10px',
    zIndex: '300',
    bg: props.color
  }

  return (
    <Box zIndex='200' w={box_width + 'px'} h={props.height || '40px'} position='absolute' top={props.top_margin + 'px'} bg={props.bg} left={props.left_margin + 'px'} overflow='hidden' >
      {html}
      <Box {...box_properties}></Box>
    </ Box>
  )
}