import React from 'react';
import { Box, IconButton, Image } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the images used in the slide
  const cards = [
    '/Home/Subway.jpg',
    '/Home/Meghan.jpg',
    '/Home/Charcuterie.jpg',
  ];

  const button = {
    _hover: {
      bg: 'white_cast',
    }
  }

  return (
    <Box
      h='100%'
      w='100%'
      borderRadius='20px'

      overflow={'hidden'}>

      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        {...button}
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left='40px'
        top='50%'
        bg='isabelline'
        transform={'translate(0%, -50%)'}
        onClick={() => slider?.slickPrev()}
        icon={<ArrowLeftIcon color='space_cadet' />} />
      {/* Right Icon */}
      <IconButton
        {...button}
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        left='480px'
        top='50%'
        bg='isabelline'
        transform={'translate(0%, -50%)'}
        onClick={() => slider?.slickNext()}
        icon={<ArrowRightIcon color='space_cadet' />} />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          // <Box
          //   key={index}
          //   height={'6xl'}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize="cover"
          //   backgroundImage={`url(${url})`}
          // />
          <Image
            boxSize='100%'
            objectFit='contain'

            src={url} />
        ))}
      </Slider>
    </Box>
  );
}

// export default function Carousel(props: any) {
//   return (
//     <></>
//   )
// }
