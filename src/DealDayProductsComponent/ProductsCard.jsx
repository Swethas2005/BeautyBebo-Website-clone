import React from 'react';
import { Box, Flex, Image, Text, IconButton, Spacer } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function formatPrice(price, discount) {
  const discountedPrice = price * (1 - discount / 100);
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
  const formattedDiscountedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(discountedPrice);

  return `${formattedPrice} (${discount}% off)`;
}

function ProductCard({ image, title, rating, price, discount }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      width="293px"
      height="430px"
      overflow="hidden"
      boxShadow="md"
      p={4}
      margin="10px 0px"
      padding="0px 25px"
      textAlign="center"
      marginTop="20px"
      marginBottom="40px"
      marginLeft="-145px"
      marginRight="140px"
    >
      <Image style={{ width: '242px', height: '242px' }} src={image} alt={title} />
      <Text fontSize="14px" fontWeight="medium" mt={2}>
        {title}
      </Text>
      <Flex align="center" justifyContent="center" mt={2}>
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} color="yellow.500" />
        ))}
      </Flex>
      <Text mt={2}>{formatPrice(price, discount)}</Text>
      <Flex mt={2} justifyContent="center">
      <p style={{backgroundColor:"#dd0285",borderRadius:"5px",color:"white",fontWeight:"bold",width:"117px",height:"30px"}} aria-label="Add to cart">Cart</p>
      </Flex>
    </Box>
  );
}

function ProductListComponent() {
    
  return (
    <Flex display="flex" justifyContent="flex-start" gap={0.9}  mt={10}>
        <h1 style={{marginLeft:"40px",fontSize:"16.1px",fontWeight:"medium",fontFamily:"sans-serif",textDecoration:"underline"}}>DEAL OF THE DAY</h1>
      <ProductCard
        image="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/p/p/ppd200g_540x.jpg"
        title="Ponds Pure White Anti-Pollution + Purity Face Wash ( 220gm )"
        rating={5}
        price={347}
        discount={23}
      />
      <ProductCard
        image="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/m/a/mama14.jpg"
        title="Mamaearth Ubtan Face Wash With Turmeric & Saffron For Tan Removal"
        rating={5}
        price={389}
        discount={25}
      />
    </Flex>
  );
}

export default ProductListComponent
