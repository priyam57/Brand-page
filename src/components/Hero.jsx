import React from 'react';


export default function Hero(){
    return(
        <main className='hero'>
            <div className='next'>
            <div className='hero-content'>
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP<br/> YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND<br/> WE'RE HERE TO HELP YOU WITH 
                OUR SHOES.
              </p>
            </div>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available On</p>
                <div className='brand-icons'>
                    <img src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg' alt='amazon-logo' className='amazon'/>
                    <img src='https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png' alt='Flipkart' className='flipkart'/>
                </div>
            </div>
            </div>
            <div className='hero-image'>
               <img src="./images/shoe_image.png" alt=""
               className='shoes'/>
            </div>

        </main>
    )
}