import React from 'react';
import '../navbar/Navbar.css';
import ticketpercent from '/src/images/ticketpercent.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content'>

                <div className='offer-bannner'>
                    <div className='offer-banner-content'>
                        <div className='offer-ticket-icon'>
                            <img className='ticket-offer-logo' src={ticketpercent}/>
                        </div>
                        <div className='offer-text'>30% off storewide — Limited time!</div>
                        <div className='shop-now'>Shop Now</div>
                    </div>
                </div>

<div className='navbar-section-container'>
<div className='navbar-section'>
                    <div className='navbar-logo'>Boat</div>
                    <div className='navbar-links'>
                        <div className='navbar-link'>Home</div>
                        <div className='navbar-link'>Shop</div>
                        <div className='navbar-link'>Product</div>
                        <div className='navbar-link'>Contact Us</div>
                    </div>
                    <div className='navbar-icons'>
                        <div className='navbar-icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div className='navbar-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='navbar-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                          
                        </div>
                       
                   
                    </div>
                </div>
</div>
               
            </div>
        </div>
    )
}

export default Navbar