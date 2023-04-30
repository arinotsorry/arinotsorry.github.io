import React from 'react';
import { Box, IconButton, Image, Show } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel(props: any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the images used in the slide
  const cards = [
    '/Home/Subway.jpg',
    '/Home/Meghan.jpg',
    '/Home/Charcuterie.jpg',
  ];

  return (
    <Box
      h={props.size || '100%'}
      w={props.size || '100%'}
      borderRadius='20px'
      boxShadow={'lg'}
      overflow={'show'}
    >

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

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image
            boxSize='100%'
            objectFit='contain'
            borderRadius={'20px'}
            src={url} />
        ))}
      </Slider>

      {/* Left Icon */}
      <Show above='sm'>
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          position="relative"
          left='-40px' //'40px'
          top='-50%' //'50%'
          bg='isabelline'
          transform={'translate(0%, -50%)'}
          _hover={{ bg: ['transparent', 'pale_dogwood.400'] }}
          onClick={() => slider?.slickPrev()}
          icon={<ArrowLeftIcon color={['transparent', 'space_cadet']} />} />
      </Show>

      {/* Right Icon */}
      <Show above='sm'>
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          position="relative"
          left='360px' //'480px'
          top='-50%' //'50%'
          bg='isabelline'
          transform={'translate(0%, -50%)'}
          _hover={{ bg: ['transparent', 'pale_dogwood.400'] }}
          onClick={() => slider?.slickNext()}
          icon={<ArrowRightIcon color={['transparent', 'space_cadet']} />} />
      </Show>
    </Box >
  );
}
