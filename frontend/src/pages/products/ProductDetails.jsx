// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import '../products/productDetails.css';
// import Description from './Description/Description';
// import Specification from './specification/Specification';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [mainImage, setMainImage] = useState('');
//     const [activeThumbnail, setActiveThumbnail] = useState('');
//     const [relatedProducts, setRelatedProducts] = useState([]);
//     const [showDescription, setShowDescription] = useState(true); 
//     const [showSpecification, setShowSpecification] = useState(false); 

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 // Fetch main product details
//                 const response = await axios.get(`http://localhost:4000/api/v1/product/getSingleProduct/${id}`);
//                 const fetchedProduct = response.data.singleProduct;
//                 setProduct(fetchedProduct);

//                 // Set main image and active thumbnail
//                 if (fetchedProduct.images && fetchedProduct.images.length > 0) {
//                     setMainImage(fetchedProduct.images[0]);
//                     setActiveThumbnail(fetchedProduct.images[0]);
//                 }

//                 // Fetch related products based on the category ID of the current product
//                 const relatedResponse = await axios.get(`http://localhost:4000/api/v1/product/relatedProducts/${fetchedProduct.category}`);
//                 const fetchedRelatedProducts = relatedResponse.data.relatedProducts;
//                 setRelatedProducts(fetchedRelatedProducts);
//             } catch (error) {
//                 console.error('Error fetching product details:', error);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     const handleThumbnailClick = (src) => {
//         setMainImage(src);
//         setActiveThumbnail(src);
//     };

//     const handleDescriptionClick = () => {
//         setShowDescription(true);
//         setShowSpecification(false);
//     };

//     const handleSpecificationClick = () => {
//         setShowDescription(false);
//         setShowSpecification(true);
//     };

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <div className="productDetailsContainer">
//                 <div className="container">
//                     <div className="productDetails">
//                         <div className='productDetailsLeft'>
//                             <img className='productDetailsMainImg' src={mainImage} alt={product.name} />
//                             <div className="childimg">
//                                 {product.images.map((src, index) => (
//                                     <img
//                                         key={index}
//                                         className={src === activeThumbnail ? 'active' : ''}
//                                         src={src}
//                                         alt={product.name}
//                                         onClick={() => handleThumbnailClick(src)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="productDetailsDataRight">
//                             <p className='productHeading'>{product.name}</p>
//                             <h2>{product.name}</h2>
//                             <div className="priceContainer">
//                                 <h4 className='salePrice'>Rs {product.salePrice}</h4>
//                                 <h4 className='realPrice'>Rs {product.realPrice}</h4>
//                             </div>
//                             <h4 className='productBrand'>{product.brand}</h4>
//                             <p className='productDescription'>{product.description}</p>
//                             <button className='cartBtn'>Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <button onClick={handleDescriptionClick}>Product Details</button>
//                 <button onClick={handleSpecificationClick}>Specification</button>
//             </div>

//             {/* Conditional rendering based on state */}
//             <div className="container">
//                 {showDescription && <Description product={product} />}
//                 {showSpecification && <Specification product={product} />}
//             </div>

//             {/* Related Products Section */}
//             <div className="relatedProductsContainer">
//                 <div className="container">
//                     <h3>Related Products</h3>
//                     <div className="allProducts">
//                         {relatedProducts.length > 0 ? (
//                             relatedProducts.map(relatedProduct => (
//                                 <Link className='link' to={`/products-details/${relatedProduct._id}`} key={relatedProduct._id}>
//                                     <div className='productChildContainer'>
//                                         <img className='productImg' src={relatedProduct.images[0]} alt={relatedProduct.name} />
//                                         <p className='productName'>{relatedProduct.name}</p>
//                                         <div className="priceContainer">
//                                             <h4 className='salePrice'>Rs {relatedProduct.salePrice}</h4>
//                                             <h4 className='realPrice'>Rs {relatedProduct.realPrice}</h4>
//                                         </div>
//                                         <h4 className='productBrand'>{relatedProduct.brand}</h4>
//                                     </div>
//                                 </Link>
//                             ))
//                         ) : (
//                             <h2>No related products found.</h2>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductDetails;







import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../products/productDetails.css';
import Description from './Description/Description';
import Specification from './specification/Specification';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [activeThumbnail, setActiveThumbnail] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/product/getSingleProduct/${id}`);
                const fetchedProduct = response.data.singleProduct;
                setProduct(fetchedProduct);

                if (fetchedProduct.images && fetchedProduct.images.length > 0) {
                    setMainImage(fetchedProduct.images[0]);
                    setActiveThumbnail(fetchedProduct.images[0]);
                }

                const relatedResponse = await axios.get(`http://localhost:4000/api/v1/product/relatedProducts/${fetchedProduct.category}`);
                const fetchedRelatedProducts = relatedResponse.data.relatedProducts;
                setRelatedProducts(fetchedRelatedProducts);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleThumbnailClick = (src) => {
        setMainImage(src);
        setActiveThumbnail(src);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="productDetailsContainer">
                <div className="container">
                    <div className="productDetails">
                        <div className='productDetailsLeft'>
                            <img className='productDetailsMainImg' src={mainImage} alt={product.name} />
                            <div className="childimg">
                                {product.images.map((src, index) => (
                                    <img
                                        key={index}
                                        className={src === activeThumbnail ? 'active' : ''}
                                        src={src}
                                        alt={product.name}
                                        onClick={() => handleThumbnailClick(src)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="productDetailsDataRight">
                            <p className='productHeading'>{product.name}</p>
                            <h2>{product.name}</h2>
                            <div className="priceContainer">
                                <h4 className='salePrice'>Rs {product.salePrice}</h4>
                                <h4 className='realPrice'>Rs {product.realPrice}</h4>
                            </div>
                            <h4 className='productBrand'>{product.brand}</h4>
                            <p className='productDescription'>{product.description}</p>
                            <button className='cartBtn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabContainer">
                <div className="container">
                    <button className={activeTab === 'description' ? 'active' : ''} onClick={() => handleTabClick('description')}>Description</button>
                    <button className={activeTab === 'specification' ? 'active' : ''} onClick={() => handleTabClick('specification')}>Specification</button>
                   
                </div>
            </div>

            <div className="container">
                {activeTab === 'description' && <Description product={product} />}
                {activeTab === 'specification' && <Specification product={product} />}
            </div>

            <div className="relatedProductsContainer">
                <div className="container">
                    <h3>Related Products</h3>
                    <div className="allProducts">
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map(relatedProduct => (
                                <Link className='link' to={`/products-details/${relatedProduct._id}`} key={relatedProduct._id}>
                                    <div className='productChildContainer'>
                                        <img className='productImg' src={relatedProduct.images[0]} alt={relatedProduct.name} />
                                        <p className='productName'>{relatedProduct.name}</p>
                                        <div className="priceContainer">
                                            <h4 className='salePrice'>Rs {relatedProduct.salePrice}</h4>
                                            <h4 className='realPrice'>Rs {relatedProduct.realPrice}</h4>
                                        </div>
                                        <h4 className='productBrand'>{relatedProduct.brand}</h4>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <h2>No related products found.</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;

