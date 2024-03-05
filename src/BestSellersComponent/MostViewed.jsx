import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { StarIcon, AddIcon } from '@chakra-ui/icons';

function ProductCards() {
  const products = [
    {
      id: 1,
      title: 'PONDs BRIGHT BEAUTY SPOT LESS GLOW SERUM CREAM SPF',
      imageUrl: 'https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf_15_.png',
      stars: 5,
      price: '₹270.00',
      discount: '10%', 
    },
    {
      id: 2,
      title: 'Lotus Herbals Whiteglow Vitamin C Radiance Gel Cream',
      imageUrl: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/i/j/ijpcwgnwgc_800x_35g_1.png",
      stars: 5,
      price: '₹223.00',
      discount: '22%',
    },
    {
      id: 3,
      title: 'Mamaearth Vitamin C Face Wash With Vitamin C And ',
      imageUrl: 'https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/m/m/mmm16.jpg',
      stars: 5,
      price: '₹455.00',
      discount: '23%', 
    },
  ];

  return (
    <div style={{ width: '293px', height: '684px', padding:"10px 10px 15px", marginLeft:"160px" }}>
      <h1 style={{marginLeft:"20px",fontSize:"17px",fontWeight:"medium",fontFamily:"sans-serif",  borderBottom: "2px solid #dd0285" }}>MOST VIEWED</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '2px', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#ffffff', marginLeft:"20px"}}>
          <img src={product.imageUrl} alt={product.title} style={{ width: '105px', height: '108px', objectFit: 'cover', float: 'left', marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '14px', fontWeight: 'medium', color: 'black', marginBottom: '5px' }}>{product.title}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              {[...Array(product.stars)].map((_, i) => (
                <StarIcon key={i} color="yellow.500" style={{ marginRight: '2px' }} />
              ))}
            </div>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#dd0285', marginBottom: '5px' }}>{product.price} (<span style={{ color: '#008000' }}>{product.discount} off</span>)</p>
            <p style={{ backgroundColor: '#dd0285',textAlign:"center",fontWeight:"bold",width:"98px",height:"30px", borderRadius: '4px', color: '#fff' }}>Add To Cart</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
