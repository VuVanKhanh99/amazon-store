import React,{useEffect,useState} from 'react'
import './Home.css'
import Product from '../Products/Product'


function Home() {
   


    return (
        <div className="home">
           <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"  alt="" />
           <div className="home__row">
                <Product 
                    id={12} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
                />
                <Product 
                    id={13} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id={14} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
                />
                <Product 
                    id={4} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
                />
                <Product 
                    id={6} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                    id={8} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.67}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
