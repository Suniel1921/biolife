// import React, { useState } from 'react';
// import '../products/product.css';
// import { useParams } from 'react-router-dom';

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Ionizer',
//       heading: 'Best ionizer in market',
//       realPrice: 3000,
//       salePrice: 1000,
//       brand: 'cg',
//       category: 'alkalineWater',
//       photo: '/images/1.png',
//       ratingImg: '/images/rating.png',
//     },
//     {
//       id: 2,
//       name: 'Ionizer',
//       heading: 'Best ionizer in market',
//       realPrice: 1043,
//       salePrice: 8333,
//       brand: 'himstar',
//       category: 'alkalineFilter',
//       photo: '/images/312.png',
//       ratingImg: '/images/rating.png',
//     },
//     {
//       id: 3,
//       name: 'Laptop',
//       heading: 'Best ionizer in market',
//       realPrice: 5043,
//       salePrice: 933,
//       brand: 'euroguard',
//       category: 'ionizer',
//       photo: '/images/12312.png',
//       ratingImg: '/images/rating.png',
//     },
//     {
//       id: 4,
//       name: 'Desktop',
//       heading: 'Best ionizer in market',
//       realPrice: 1943,
//       salePrice: 9333,
//       brand: 'euroguard',
//       category: 'airpurifier',
//       photo: '/images/1.png',
//       ratingImg: '/images/rating.png',
//     },
//     {
//       id: 5,
//       name: 'Phone',
//       heading: 'Best ionizer in market',
//       realPrice: 8943,
//       salePrice: 5033,
//       brand: 'euroguard',
//       category: 'airpurifier',
//       photo: '/images/1.png',
//       ratingImg: '/images/rating.png',
//     },
//   ];

//   const [productBrand, setProductBrand] = useState('');
//   const [productCategory, setProductCategory] = useState('');
//   const [productPriceRange, setProductPriceRange] = useState(10000);
//   const [productSort, setProductSort] = useState('');
//   const productId = useParams();
//   console.log(productId)

//   // Filter data based on brand, category, and price range
//   const filterData = products.filter((fData) => (
//     (productBrand === '' || fData.brand.toLowerCase() === productBrand.toLowerCase()) &&
//     (productCategory === '' || fData.category.toLowerCase() === productCategory.toLowerCase()) &&
//     (fData.salePrice <= productPriceRange)
//   )).sort((a, b) => {
//     if (productSort === 'lth') {
//       return a.salePrice - b.salePrice;
//     }
//     if (productSort === 'htl') {
//       return b.salePrice - a.salePrice;
//     }
//     return 0;
//   });

//   return (
//     <>
//       <div className="productContainer">
//         <div className="container">
//           <div className="products">
//             <aside className='left_filter'>
//               <div className="filterSection">
//                 <div className="brandFilterSection">
//                   <select value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
//                     <option value="">All Brand</option>
//                     <option value="cg">CG</option>
//                     <option value="himstar">Himstar</option>
//                     <option value="euroguard">Euroguard</option>
//                     <option value="kent">Kent</option>
//                   </select>
//                 </div>

//                 <div className="categoryFilterSection">
//                   <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
//                     <option value="">All</option>
//                     <option value="ionizer">Ionizer</option>
//                     <option value="airpurifier">Air Purifier</option>
//                     <option value="alkalineWater">Alkaline Water</option>
//                     <option value="alkalineFilter">Alkaline Filter</option>
//                   </select>
//                 </div>

//                 <div className="priceRangeFilterSection">
//                   <label>Price Range: {productPriceRange}</label>
//                   <input 
//                     type="range" 
//                     min="1000" 
//                     max="10000" 
//                     step="100" 
//                     value={productPriceRange} 
//                     onChange={(e) => setProductPriceRange(e.target.value)} 
//                   />
//                 </div>

//                 <div className="sortFilterSection">
//                   <select value={productSort} onChange={(e) => setProductSort(e.target.value)}>
//                     <option value="">Default</option>
//                     <option value="htl">High to Low Price</option>
//                     <option value="lth">Low to High Price</option>
//                   </select>
//                 </div>
//               </div>
//             </aside>

//             <main className='rightProduct'>
//               <h3>Products</h3>
//               <div className="allProducts">
//                 {
//                   filterData.length > 0 ? (
//                     filterData.map((product) => (
//                       <div className='productChildContainer' key={product.id}>
//                         <img className='productImg' src={product.photo} alt={product.name} />
//                         <p className='productName'>{product.name}</p>
//                         <p className='productHeading'>{product.heading}</p>
//                         <div className="priceContainer">
//                           <h4 className='salePrice'>Rs {product.salePrice}</h4>
//                           <h4 className='realPrice'>Rs {product.realPrice}</h4>
//                         </div>
//                         <img className='ratingImg' src={product.ratingImg} alt="" />
//                         <h4 className='productBrand'>{product.brand}</h4>
//                       </div>
//                     ))
//                   ) : (
//                     <h2>Oops! No products found for the selected brand, category, and price range.</h2>
//                   )
//                 }
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;






import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../products/product.css';
import { useParams } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Ionizer',
      heading: 'Best ionizer in market',
      realPrice: 3000,
      salePrice: 1000,
      brand: 'cg',
      category: 'alkalineWater',
      photo: '/images/1.png',
      ratingImg: '/images/rating.png',
    },
    {
      id: 2,
      name: 'Ionizer',
      heading: 'Best ionizer in market',
      realPrice: 1043,
      salePrice: 8333,
      brand: 'himstar',
      category: 'alkalineFilter',
      photo: '/images/312.png',
      ratingImg: '/images/rating.png',
    },
    {
      id: 3,
      name: 'Laptop',
      heading: 'Best ionizer in market',
      realPrice: 5043,
      salePrice: 933,
      brand: 'euroguard',
      category: 'ionizer',
      photo: '/images/12312.png',
      ratingImg: '/images/rating.png',
    },
    {
      id: 4,
      name: 'Desktop',
      heading: 'Best ionizer in market',
      realPrice: 1943,
      salePrice: 9333,
      brand: 'euroguard',
      category: 'airpurifier',
      photo: '/images/1.png',
      ratingImg: '/images/rating.png',
    },
    {
      id: 5,
      name: 'Phone',
      heading: 'Best ionizer in market',
      realPrice: 8943,
      salePrice: 5033,
      brand: 'euroguard',
      category: 'airpurifier',
      photo: '/images/1.png',
      ratingImg: '/images/rating.png',
    },
  ];

  const [productBrand, setProductBrand] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPriceRange, setProductPriceRange] = useState(10000);
  const [productSort, setProductSort] = useState('');
  const productId = useParams();
  console.log(productId)

  // Filter data based on brand, category, and price range
  const filterData = products.filter((fData) => (
    (productBrand === '' || fData.brand.toLowerCase() === productBrand.toLowerCase()) &&
    (productCategory === '' || fData.category.toLowerCase() === productCategory.toLowerCase()) &&
    (fData.salePrice <= productPriceRange)
  )).sort((a, b) => {
    if (productSort === 'lth') {
      return a.salePrice - b.salePrice;
    }
    if (productSort === 'htl') {
      return b.salePrice - a.salePrice;
    }
    return 0;
  });

  return (
    <>
      <div className="productContainer">
        <div className="container">
          <div className="products">
            <aside className='left_filter'>
              <div className="filterSection">
                <div className="brandFilterSection">
                  <select value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
                    <option value="">All Brand</option>
                    <option value="cg">CG</option>
                    <option value="himstar">Himstar</option>
                    <option value="euroguard">Euroguard</option>
                    <option value="kent">Kent</option>
                  </select>
                </div>

                <div className="categoryFilterSection">
                  <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="ionizer">Ionizer</option>
                    <option value="airpurifier">Air Purifier</option>
                    <option value="alkalineWater">Alkaline Water</option>
                    <option value="alkalineFilter">Alkaline Filter</option>
                  </select>
                </div>

                <div className="priceRangeFilterSection">
                  <label>Price Range: {productPriceRange}</label>
                  <input 
                    type="range" 
                    min="1000" 
                    max="10000" 
                    step="100" 
                    value={productPriceRange} 
                    onChange={(e) => setProductPriceRange(e.target.value)} 
                  />
                </div>

              </div>
            </aside>

            <main className='rightProduct'>
           <div className="sortByContainer">
           <div>
             <h2>Products</h2>
             </div>

           <div className="sortFilterSection">
                  <select value={productSort} onChange={(e) => setProductSort(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="htl">High to Low Price</option>
                    <option value="lth">Low to High Price</option>
                  </select>
                </div>

             
           </div>
              
              <div className="allProducts">
                {
                  filterData.length > 0 ? (
                    filterData.map((product) => (
                      <Link className='link' key={product.id} to={`/products-details/${product.id}`}>
                        <div className='productChildContainer'>
                          <img className='productImg' src={product.photo} alt={product.name} />
                          <p className='productName'>{product.name}</p>
                          <p className='productHeading'>{product.heading}</p>
                          <div className="priceContainer">
                            <h4 className='salePrice'>Rs {product.salePrice}</h4>
                            <h4 className='realPrice'>Rs {product.realPrice}</h4>
                          </div>
                          <img className='ratingImg' src={product.ratingImg} alt="Rating" />
                          <h4 className='productBrand'>{product.brand}</h4>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <h2>Oops! No products found for the selected brand, category, and price range.</h2>
                  )
                }
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

