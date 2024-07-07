import React, { useEffect, useState } from 'react';
import '../deal_of_the_Day/dealOfTheDay.css';

const DealOfTheDay = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-07-08T00:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [selectedImage, setSelectedImage] = useState('/images/deal1.png');

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
       <>
        <div className="container">
        <div className="deal-of-the-day">
            <div className="deal-info">
                <div className="deal-text">
                    <p className="deal-only-today">ONLY FOR TODAY</p>
                    <h2 className="deal-title">Deal Of The Day</h2>
                    <p className="deal-description">
                        Deal of the Day for deals on consumer electronics. Watch for many other great daily offers.
                    </p>
                </div>
                <div className="deal-timer">
                    <div className="timer-box">
                        <span className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="timer-label">Hours</span>
                    </div>
                    <div className="timer-box">
                        <span className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="timer-label">Mins</span>
                    </div>
                    <div className="timer-box">
                        <span className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="timer-label">Secs</span>
                    </div>
                </div>
            </div>
            <div className="deal-product">
                <div className="product-images">
                    <img className="product-thumbnail" src="/images/deal.png" alt="Product Thumbnail 1" onClick={() => handleImageClick('/images/deal.png')} />
                    <img className="product-thumbnail" src="/images/deal1.png" alt="Product Thumbnail 2" onClick={() => handleImageClick('/images/deal1.png')} />
                    <img className="product-thumbnail" src="/images/deal.png" alt="Product Thumbnail 3" onClick={() => handleImageClick('/images/deal.png')} />
                    <img className="product-thumbnail" src="/images/deal1.png" alt="Product Thumbnail 4" onClick={() => handleImageClick('/images/deal1.png')} />
                </div>
                <div className="product-main">
                    <img className="product-main-image" src={selectedImage} alt="Main Product" />
                </div>
                <div className="product-info">
                    <p className="product-discount">-26%</p>
                    <h3 className="product-brand">Samsung Galaxy</h3>
                    <h2 className="product-title">Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB</h2>
                    <div className="product-rating">
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <p className="product-price">
                        <span className="product-new-price">$699.99</span>
                        <span className="product-old-price">$949.99</span>
                    </p>
                    <p className="product-features">
                        Fast charging 18W, 50% in 30 min USB Power Delivery 2.0 nQi wireless charging
                    </p>
                    <button className="add-to-cart-button">ADD TO CART</button>
                </div>
            </div>
        </div>
        </div>
       </>
    );
};

export default DealOfTheDay;

