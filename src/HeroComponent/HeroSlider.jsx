import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const images = [
 "https://www.beautybebo.com/pub/media/ads/slider-2.png",
 "https://www.beautybebo.com/pub/media/ads/slidrr.png",
 "https://www.beautybebo.com/pub/media/ads/slider_1.png"
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="925px" height="325px" padding="15px" overflow="hidden" marginLeft="295px" marginRight="auto" marginTop="-60px">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} width="100%" height="100%" style={{ transform: 'translateY(-20px)' }} />
    </Box>
  );
}

export default ImageSlider;
