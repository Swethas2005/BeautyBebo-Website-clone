import React from 'react';
import { StarIcon} from '@chakra-ui/icons';

function ProductCards() {
  const products = [
    {
      id: 1,
      title: 'Lotus Herbals Whiteglow Vitamin C Radiance Gel Cream',
      imageUrl: 'https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/b/0/b0c3yw4hrg_1_1024x.png',
      stars: 5,
      price: '₹399.00',
      discount: '16%', 
    },
    {
      id: 2,
      title: 'Olay Natural White Light Instant Glowing Fairness Cream, 40g',
      imageUrl: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/5/6/5654d3c1-5483-44a1-aa31-deeeab71197c.png",
      stars: 5,
      price: '  ₹299.00',
      discount: '12%',
    },
    {
      id: 3,
      title: 'Garnier Skin Naturals - Moisturising Serum-In-Lotion, ',
      imageUrl: "https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/g/a/garnier-skin-naturals-light-lotion-250-ml.png",
      stars: 5,
      price: '₹249.00',
      discount: '9%', 
    },
  ];

  return (
    <div style={{ width: '294px', height: '684px', padding:"10px 10px 15px" , marginLeft:"160px"}} >
        <div >
      <h1 style={{marginLeft:"20px",fontSize:"17px",fontWeight:"medium",fontFamily:"sans-serif",  borderBottom: "2px solid #dd0285" }}>LATEST PRODUCTS</h1>
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
    </div>
  );
}

export default ProductCards;
