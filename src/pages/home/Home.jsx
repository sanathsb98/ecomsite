import React from 'react';
import '../home/Home.css';
import homeleftimg from '/src/images/homeleftimg2.gif';
import OurBrands from '../../components/ourbrands/OurBrands';
import Typewriter from 'typewriter-effect';
import NewArrivals from '../../components/newArrivals/NewArrivals';

const Home = () => {
    return (
        <div className='home-container'>

            <div className='home-content'>

                <div className='home-content-left'>
                    <img src={homeleftimg} className='homeleftimage' />
                </div>

                <div className='home-content-right'>
                    <div className='home-content-title'>
                        Listen to the <span className='amazing'>
                            <Typewriter
                                options={{
                                    strings: ['amazing', 'splendid'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span> music sound.
                    </div>
                    <div className='home-content-description'>
                        Experience music like never before
                    </div>
                    <div className='home-shop-button'>
                        Shop Now
                    </div>
                </div>

            </div>
            <div className='home-brands-container'>
                <OurBrands />
            </div>
            <div className='new-arrivals-container'>
           
            <NewArrivals/>
               

            </div>



        </div>
    )
}

export default Home