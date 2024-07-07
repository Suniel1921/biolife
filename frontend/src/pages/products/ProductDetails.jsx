import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../products/productDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [mainImage, setMainImage] = useState('/images/1.png');
    const [activeThumbnail, setActiveThumbnail] = useState('/images/1.png');

    const product = {
        id: 1,
        name: 'Ionizer',
        heading: 'Best ionizer in market',
        realPrice: 3000,
        salePrice: 1000,
        brand: 'CG',
        category: 'alkalineWater',
        photo: 'https://m.media-amazon.com/images/I/71za+hmNCXL._AC_SX425_.jpg',
        // photo: '/images/1.png',
        ratingImg: '/images/rating.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo vel orci lobortis volutpat.'
    };

    const handleThumbnailClick = (src) => {
        setMainImage(src);
        setActiveThumbnail(src);
    };

    return (
        <div className="productDetailsContainer">
            <div className="container">
                <div className="productDetails">
                    <div className='productDetailsLeft'>
                        <img className='productDetailsMainImg' src={mainImage} alt={product.name} />
                        <div className="childimg">
                            {[product.photo, product.photo, product.photo].map((src, index) => (
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
                        <p className='productHeading'>{product.heading}</p>
                        <h2>{product.name}</h2>
                        <div className="priceContainer">
                            <h4 className='salePrice'>Rs {product.salePrice}</h4>
                            <h4 className='realPrice'>Rs {product.realPrice}</h4>
                        </div>
                        <img className='ratingImg' src={product.ratingImg} alt="Rating" />
                        <h4 className='productBrand'>{product.brand}</h4>
                        <p className='productDescription'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
