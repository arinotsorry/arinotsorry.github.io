import { Square, Circle, Box } from '@chakra-ui/react'
import useWindowDimensions from '../Hooks/useWindowDimensions'

function getLittleCircle(pos: number, color: string, top: boolean, zIndex: number) {
  let top_offset = top ? 6 : 28

  return (
    <Square position='absolute' left={pos + 'px'} top={top_offset + 'px'} size='6px' bg='transparent' zIndex={zIndex + 150}>
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

export default function Squiggle(props: any) {
  /**
   * props:
   * 
   * top: bool, whether there are squiggles on top
   * bottom: bool, whether there are squiggles on bottom
   * 
   * color: string, color of the squiggles
   * bg: string, color of the background & little dots
   * 
   * left: if <= 1, then interpret as percentage, otherwise it's a px quantity
   * width: if <= 1, then interpret as percentage, otherwise it's a px quantity
   * 
   * 
   * 
   * zIndex: base zIndex for the component that only increases
   * offset: bool, whether the image is offset by 20px (half a circle)
   * fill: kind of half-implemented, if fill is true, one rectangle fills squiggle. 
   *        this can look weird if the rectangle ends just past the end of an even circle
   *        if it's false, we have one 20px rectangle and one 10px rectangle of (width: width - 40, left: 20)
   *        to fill it in.
   */

  // get the width of the window and the visible curve
  let window_width = useWindowDimensions().width

  let display_box_width = props.width <= 1 ? (props.width * window_width) : (props.width)

  // get the left border of the display window/curve
  let left = props.left <= 1 ? props.left * window_width : props.left

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
    width: display_box_width + 'px',
    height: !props.fill ? (props.top_margin + 20) + 'px' : props.top ? (props.bottom ? ('20px') : ('30px')) : (props.top_margin + 30) + 'px',

    position: 'absolute' as const,
    top: props.top ? '10px' : (-1 * props.top_margin) + 'px',
    bottom: props.top ? '' : '-10px',
    left: 0 + 'px',
    right: 0 + 'px',

    zIndex: props.zIndex + 100,
    bg: props.color
  }

  const small_rectangle = {
    width: display_box_width - 40 + 'px',
    height: '10px',

    position: 'absolute' as const,
    top: props.top ? '10px' : '20px',
    left: '20px',

    bg: props.color,
    zIndex: props.zIndex + 100,
  }

  return (
    <Box {...displayBox}>
      {html}
      <Box {...rectangle}></Box>
      {!props.fill &&
        <Box {...small_rectangle}></Box>}
    </Box>
  )
}