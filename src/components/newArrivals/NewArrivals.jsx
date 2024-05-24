import React, { useEffect, useState } from 'react';
import '../newArrivals/NewArrivals.css';
import productimg1 from '/src/images/productimg1.png';
import productimg2 from '/src/images/productimg2.png';
import productimg3 from '/src/images/productimg3.png';
import productimg4 from '/src/images/productimg4.png';
import productimg5 from '/src/images/productimg5.png';
import productimg6 from '/src/images/productimg6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const newArrivals = () => {

    const [products, setProducts] = useState([]);
    const [favourite, setFavourite] = useState({});

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const productAPIData = await axios.get("https://shopappbackend.vercel.app/api");
            console.log("productAPIData", productAPIData.data)
            setProducts(productAPIData.data.products);
        } catch (err) {
            console.log(err);
        }
    }

    const addToFavourite = (id) => {
        console.log("added to favourites")
        setFavourite(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    console.log("products________",products);

    return (
        <div className='new-arrivals-content'>
            <div className='new-arrivals-header'>
                <div className='new-arrivals-title'>New Arrivals</div>
                <div className='new-arrivals-more'>**</div>
            </div>
            {products.length > 0 && (
                <div className='new-arrivals-product-slider'>
                  
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            500: {
                                slidesPerView: 3
                            },
                            1250: {
                                slidesPerView: 4
                            }
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {products.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className='new-arrivals-product'>
                                    <div className='arrivals-details-section'>
                                        <div className='arrivals-product-header'>
                                            <div className='new-tag'>New</div>
                                            <div className='fav-tag'>
                                                <svg
                                                    onClick={() => { addToFavourite(data.id) }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    cursor="pointer"
                                                    width="16"
                                                    height="16"
                                                    stroke='2px'
                                                    fill={favourite[data.id] ? "red" : "#dedede"}
                                                    class="bi bi-heart-fill"
                                                    viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='arrivals-product-image'>
                                            <img className='product-img' src={data.productImage} alt={`Product ${index + 1}`} />
                                        </div>
                                        <div className='arrivals-addtocart-section'>
                                            <div className='arrivals-addtocart-btn'>Add to cart</div>
                                        </div>
                                    </div>
                                    <div className='arrivals-priceimg-section'>
                                        {/* <div className='arrivals-rating'>
                                            {data.productRating}
                                        </div> */}
                                        <div className='arrivals-title'>{data.productName}</div>
                                        <div className='arrivals-price'>${data.productPrice}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default newArrivals;
