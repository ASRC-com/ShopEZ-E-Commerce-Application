import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SaleBanner.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
    );
};

const SaleBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const banners = [
        {
            image: 'https://img.freepik.com/premium-vector/editable-summer-sale-banner-with-tropical-leaf-theme_336924-1624.jpg',
            alt: 'Sale 1',
        },
        {
            image: 'https://static.vecteezy.com/system/resources/previews/042/672/834/non_2x/special-offer-flash-sale-mega-offer-in-green-colour-theme-limited-time-offer-best-banner-design-for-social-media-and-corporate-companies-eps-file-vector.jpg',
            alt: 'Sale 2',
        },
        
    ];

    const handleBannerClick = () => {
        window.scrollBy({
            top: window.innerHeight * 1.0, // Adjust this value to scroll by a different percentage
            behavior: 'smooth',
        });
    };

    return (
        <div className="sale-banner">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index} onClick={handleBannerClick}>
                        <img src={banner.image} alt={banner.alt} className="banner-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SaleBanner;
