import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../products/product.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import CardSkeleton from '../../components/cardSkeleton/CardSkeleton';

const Products = () => {
  const [productBrand, setProductBrand] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPriceRange, setProductPriceRange] = useState(200000);
  const [productSort, setProductSort] = useState('');
  const [products, setProducts] = useState([]);
  const [loadingSkeleton, setLoadingSkeleton] = useState(true); 

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/product/getAllProduct`);
      if (response.data.success) {
        setProducts(response.data.getAllProducts);
        setLoadingSkeleton(false); 
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Filter products based on brand, category, and price range
  const filterData = products.filter((fData) => (
    (productBrand === '' || fData.brand.toLowerCase() === productBrand.toLowerCase()) &&
    (productCategory === '' || fData.category._id === productCategory) &&
    (parseInt(fData.salePrice) <= parseInt(productPriceRange))
  )).sort((a, b) => {
    if (productSort === 'lth') {
      return parseInt(a.salePrice) - parseInt(b.salePrice);
    }
    if (productSort === 'htl') {
      return parseInt(b.salePrice) - parseInt(a.salePrice);
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
                    <option value="macbook">macbook</option>
                    <option value="oneplus">onePlus</option>
                  </select>
                </div>

                <div className="categoryFilterSection">
                  <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                    <option value=''>All</option>
                    {products.map((cData) => (
                      <option key={cData.category._id} value={cData.category._id}>{cData.category.categoryName}</option>
                    ))}
                  </select>
                </div>

                <div className="priceRangeFilterSection">
                  <label>Price Range: {productPriceRange}</label>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
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
                  loadingSkeleton ? (
                    <CardSkeleton />
                  ) : (
                    filterData.length > 0 ? (
                      filterData.map((product) => (
                        <Link className='link' key={product._id} to={`/products-details/${product._id}`}>
                          <div className='productChildContainer'>
                            <img className='productImg' src={product.images[0]} alt={product.name} />
                            <p className='productName'>
                              {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}
                            </p>
                            <p className='productHeading'>{product.heading}</p>
                            <div className="priceContainer">
                              <h4 className='salePrice'>Rs {product.salePrice}</h4>
                              <h4 className='realPrice'>Rs {product.realPrice}</h4>
                            </div>
                            <h4 className='productBrand'>{product.brand}</h4>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <h2>Oops! No products found for the selected brand, category, and price range.</h2>
                    )
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
