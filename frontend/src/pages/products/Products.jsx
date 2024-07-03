import React, { useState } from 'react';
import '../products/product.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Ionizer',
      price: 343,
      brand: 'cg',
      category: 'alklineWater',
      photo: 'https://m.media-amazon.com/images/I/711PNVlv1cL.jpg'
    },
    {
      id: 2,
      name: 'Ionizer',
      price: 6643,
      brand: 'himstar',
      category: 'airpurifiere',
      photo: 'https://m.media-amazon.com/images/I/81Fdhoyba8L.jpg',
    },
    {
      id: 3,
      name: 'Ionizer',
      price: 6643,
      brand: 'euroguard',
      category: 'airpurifiere',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBHx-RVdd2E1s-hG9lDTiw4Hl9iEsqRwL1g&s',
    },
    {
      id: 4,
      name: 'Ionizer',
      price: 6643,
      brand: 'kent',
      category: 'ionizer',
      photo: 'https://m.media-amazon.com/images/I/61XP6k4LhJL.jpg',
    },
  ];

  const [productBrand, setProductBrand] = useState('');
  const [productCategory, setProductCategory] = useState('');

  // Filter data based on brand and category
  const filterData = products.filter((fData) => (
    (productBrand === '' || fData.brand.toLowerCase() === productBrand.toLowerCase()) &&
    (productCategory === '' || fData.category.toLowerCase() === productCategory.toLowerCase())
  ));

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
                    <option value="airpurifiere">Air Purifier</option>
                    <option value="alklineWater">Alkaline Water Purifier</option>
                    <option value="aklineFiter">Alkaline Filter</option>
                  </select>
                </div>
              </div>
            </aside>

            <main className='rightProduct'>
              <h3>Products</h3>
              <div className="allProducts">
                {
                  filterData.length > 0 ? (
                    filterData.map((product) => (
                      <div key={product.id}>
                        <img className='productImg' src={product.photo} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h2>{product.price}</h2>
                        <h2>{product.brand}</h2>
                      </div>
                    ))
                  ) : (
                    <h2>Oops! No products found for the selected brand and category.</h2>
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
