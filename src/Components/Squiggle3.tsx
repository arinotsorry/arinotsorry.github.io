import { Square, Circle, Box } from '@chakra-ui/react'
import useWindowDimensions from '../Hooks/useWindowDimensions'

function getLittleCircle(pos: number, color: string, top: boolean, zIndex: number) {
  let top_offset = 28
  if (top) {
    top_offset = 6
  }

  return (
    <Square position='absolute' left={pos + 'px'} top={top_offset + 'px'} size='6px' bg='transparent' zIndex={zIndex + 200}>
      <Circle size='6px' bg={color} zIndex={zIndex + 200}></Circle>
    </Square>
  )
}

function getBigCircle(pos: number, color: string, zIndex: number) {
  return (
    <Square position='absolute' top={0} left={pos + 'px'} size='40px' bg='transparent' zIndex={zIndex + 50}>
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
   * left_percentage: squiggle's left border, as a percentage. Used for calculations
   * top_margin: distance from top of circle to top of page
   * 
   * width?: width of the display box - default useWindowDimensions().width
   * width_percentage?: between 0.0 and 1.0, overrides width
   * 
   * zIndex: base zIndex for the component that only increases
   * offset: bool, whether the image is offset by 20px (half a circle)
   */

  // get the width of the window and the visible curve
  let window_width = useWindowDimensions().width

  let display_box_width = window_width
  if (props.width_percentage) {
    display_box_width = props.width_percentage * window_width
  }
  else if (props.width) {
    display_box_width = props.width
  }

  // get the left border of the display window/curve
  let left = props.left_percentage * window_width

  // calculate which circles to generate - don't do the whole row
  let absolute_circle_start = (left - (left % 40)) - (props.offset ? (40) : (20))

  // how far to start the circles before the left of the display box - negative number
  let relative_circle_start = absolute_circle_start - left

  // making the string of circles
  let big = true
  let html = []
  let pixel = relative_circle_start
  while (pixel < (-1 * relative_circle_start) + display_box_width) {
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

  const displayBox = {
    position: 'absolute' as const,
    top: props.top_margin + 'px',
    bg: 'transparent',
    left: 0 + 'px',
    overflow: 'hidden',
    w: display_box_width + 'px',
    height: '50px'
  }

  const rectangle = {
    width: display_box_width,
    height: props.top ? (props.bottom ? ('20px') : ('30px')) : (props.top_margin + 30) + 'px',

    position: 'absolute' as const,
    top: props.top ? '10px' : (-1 * props.top_margin) + 'px',
    bottom: props.top ? '' : '-10px',
    left: 0 + 'px',

    zIndex: props.zIndex + 100,
    bg: props.color
  }

  return (
    <Box {...displayBox}>
      {html}
      <Box {...rectangle}></Box>
    </Box>
  )
}