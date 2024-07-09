// import React, { useState } from 'react';
// import '../bestSeller/bestSeller.css';
// import { Link } from 'react-router-dom';

// const BestSeller = () => {
//     const products = [
//         {
//             id: 1,
//             name: 'Ionizer',
//             heading: 'Best ionizer in market',
//             realPrice: 3000,
//             salePrice: 1000,
//             brand: 'cg',
//             category: 'ionizer',
//             photo: '/images/1.png',
//             ratingImg: '/images/rating.png',
//         },
//         {
//             id: 2,
//             name: 'Ionizer',
//             heading: 'Best ionizer in market',
//             realPrice: 1043,
//             salePrice: 8333,
//             brand: 'himstar',
//             category: 'ionizer',
//             photo: '/images/312.png',
//             ratingImg: '/images/rating.png',
//         },
//         {
//             id: 3,
//             name: 'Laptop',
//             heading: 'Best laptop in market',
//             realPrice: 5043,
//             salePrice: 933,
//             brand: 'euroguard',
//             category: 'laptop',
//             photo: '/images/12312.png',
//             ratingImg: '/images/rating.png',
//         },
//         {
//             id: 4,
//             name: 'Desktop',
//             heading: 'Best desktop in market',
//             realPrice: 1943,
//             salePrice: 9333,
//             brand: 'euroguard',
//             category: 'desktop',
//             photo: '/images/1.png',
//             ratingImg: '/images/rating.png',
//         },
//         {
//             id: 5,
//             name: 'Phone',
//             heading: 'Best phone in market',
//             realPrice: 8943,
//             salePrice: 5033,
//             brand: 'euroguard',
//             category: 'phone',
//             photo: '/images/1.png',
//             ratingImg: '/images/rating.png',
//         },
//     ];

//     const [selectedCategory, setSelectedCategory] = useState('');

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory)
//         : products;

//     return (
//         <>
//             <div className="bestSeller">
//                 <div className="container">
//                     <div className="bestSellerContainer">
//                         <div className="sellerHeading">
//                             <h3 className="heading">Best Sellers</h3>
//                             <div className="categoryContainer">
//                                 <p onClick={() => handleCategoryClick('')}>All</p>
//                                 <p onClick={() => handleCategoryClick('ionizer')}>Ionizer</p>
//                                 <p onClick={() => handleCategoryClick('phone')}>Phone</p>
//                                 <p onClick={() => handleCategoryClick('laptop')}>Laptop</p>
//                             </div>
//                         </div>

//                         <div className="sellerProductContainer">
//                             <div className="card">
//                                 <div className="allProducts">
//                                     {filteredProducts.length > 0 ? (
//                                         filteredProducts.map((product) => (
//                                             <Link key={product.id} to={`/products-details/${product.id}`}>
//                                                 <div className="productChildContainer">
//                                                     <img className="productImg" src={product.photo} alt={product.name} />
//                                                     <p className="productName">{product.name}</p>
//                                                     <p className="productHeading">{product.heading}</p>
//                                                     <div className="priceContainer">
//                                                         <h4 className="salePrice">Rs {product.salePrice}</h4>
//                                                         <h4 className="realPrice">Rs {product.realPrice}</h4>
//                                                     </div>
//                                                     <img className="ratingImg" src={product.ratingImg} alt="Rating" />
//                                                     <h4 className="productBrand">{product.brand}</h4>
//                                                 </div>
//                                             </Link>
//                                         ))
//                                     ) : (
//                                         <h2>Oops! No products found for the selected category.</h2>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default BestSeller;








import React from 'react'

const BestSeller = () => {
  return (
    <>
    <div className="bestSeller">
        <div className="container">
            <div className="bestSellerContainer">
                
            </div>
        </div>
    </div>
      
    </>
  )
}

export default BestSeller
