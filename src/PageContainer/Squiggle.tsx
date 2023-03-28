import { Square, Circle } from '@chakra-ui/react'
import useWindowDimensions from '../Hooks/useWindowDimensions';

function getCircle(pos: number) {
  return (
    <div>
      <Square position='absolute' left={pos + 'px'} top='90px' size='40px' bg='transparent' zIndex='100'>
        <Circle size='40px' bg='pale_dogwood' zIndex='100'></Circle>
      </Square>
      <Square position='absolute' left={(pos - 3) + 'px'} top='118px' size='6px' bg='transparent' zIndex='150'>
        <Circle size='6px' bg='isabelline' zIndex='150'></Circle>
      </Square>
    </div>
  )
}

export default function Squiggle() {
  const width = useWindowDimensions().width;
  let pixels = 20;
  let returning = [getCircle(-20)]
  while (pixels < width) {
    returning.push(getCircle(pixels))
    pixels += 40
  }
  return (
    <div>
      {returning}
    </div>
  )
}