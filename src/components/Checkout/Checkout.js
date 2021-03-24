import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';


function Checkout(){
    const [{basket}] = useStateValue();
    
    return(
        <div className="checkout">
            <div className="checkout__header">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/MaloneLP/9XYZ_header.jpg" alt="" />
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            </div>
            {basket?.length === 0 ?(
               <h2>Your Shopping Basket is empty</h2>
                
            ): (
                <div className="product__item">
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map(item => {
                               
                        return(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        )}
                    )
                    }
                </div>  
                )}
            
        </div>
    )
}

export default Checkout;
