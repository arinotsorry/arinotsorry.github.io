import { Square, Circle, Box } from '@chakra-ui/react'
import useWindowDimensions from '../Hooks/useWindowDimensions'
import './Squiggle.css'

function getLittleCircle(pos: number, color: string, top: boolean, zIndex: number) {
  let top_offset = 28
  if (top) {
    top_offset = 6
  }

  return (
    <Square position='absolute' left={pos + 'px'} top={top_offset + 'px'} size='6px' bg='transparent' zIndex={zIndex + 2000}>
      <Circle size='6px' bg={color} zIndex={zIndex + 200}></Circle>
    </Square>
  )
}

function getBigCircle(pos: number, color: string, zIndex: number) {
  return (
    <Square position='absolute' left={pos + 'px'} size='40px' bg='transparent' zIndex={zIndex + 50}>
      <Circle size='40px' bg={color} zIndex={zIndex + 100}></Circle>
    </Square>
  )
}
export default function Squiggle2(props: any) {
  /**
   * props:
   * 
   * top: bool, whether there are squiggles on top
   * bottom: bool, whether there are squiggles on bottom
   * 
   * color: string, color of the squiggles
   * bg: string, color of the background & little dots
   * 
   * left_percentage: distance from left, as percentage
   * top_margin: distance from top of circle to top of page
   * 
   * width?: width of the box - default useWindowDimensions().width
   * width_percentage?: between 0.0 and 1.0, overrides width
   * 
   * zIndex - base zIndex for the component that only increases
   * scooch - this is dumb, but sometimes things are misaligned by a few pixels
   */


  // finding the width of the circle display
  let display_width = useWindowDimensions().width // default
  if (props.width_percentage) {
    display_width = props.width_percentage * display_width
  }
  else if (props.width) {
    display_width = props.width
  }

  // finding how far left the box is
  let display_left_margin = props.left_percentage * useWindowDimensions().width

  // making the string of circles - we will add the box later
  let big = true
  let html = []
  let pixel = 20
  while (pixel < display_width + 40) {
    if (big) {
      html.push(getBigCircle(pixel, props.color, props.zIndex))
      pixel += 37
    }
    else {
      // little circle changes position depending on if it's smoothing out the top or bottom
      if (props.top) {
        html.push(getLittleCircle(pixel, props.bg, true, props.zIndex))
      }
      if (props.bottom) {
        html.push(getLittleCircle(pixel, props.bg, false, props.zIndex))
      }
      pixel += 3
    }
    big = !big
  }

  // defining formatting for the boxes
  let display_box_properties = {
    width: display_width,
    height: props.top ? (props.bottom ? ('20px') : ('30px')) : (props.top_margin + 30) + 'px',

    position: 'absolute' as const,
    top: props.top ? '10px' : (-1 * props.top_margin) + 'px',
    bottom: props.top ? '' : '-10px',
    left: 40 - props.scooch + 'px',

    zIndex: props.zIndex + 100,
    bg: props.color
  }

  let calculated_width = ((((display_width / 40) >> 0) + 2) * 40)

  let outer_box_properties = {
    w: calculated_width + 'px',
    h: '40px',
    position: 'absolute' as const,
    top: props.top_margin + 'px',
    bg: 'transparent',
    left: display_left_margin + props.scooch - 40 + 'px',
    zIndex: props.zIndex,
  }

  let cover_left_overflow = {
    border: '1px',
    borderColor: props.bg,
    borderRadius: '0 0 0 15px',
    bg: props.bg,

    position: 'absolute' as const,
    h: '40px',
    w: 40 - props.scooch + 'px',

    zIndex: 800
  }

  let cover_right_overflow = {
    border: '1px',
    borderColor: props.bg,
    borderRadius: '0 0 15px 0',
    bg: props.bg,

    position: 'absolute' as const,
    h: '40px',
    left: display_width + 40 - props.scooch + 'px',
    width: calculated_width - (display_width + 40 - props.scooch) + 'px',
    zIndex: 900
  }

  return (
    <>
      <Box {...outer_box_properties} className='squiggle'></Box>
      <Box {...outer_box_properties}>
        <Box {...cover_left_overflow}></Box>
        <Box {...cover_right_overflow}></Box>
        {html}
        <Box {...display_box_properties}></Box>
      </ Box>
    </>
  )
}