import React,{useState,useEffect} from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const [counterProduct,setCounterProduct] =  useState(1);
    const decreaseProduct = () =>{
        setCounterProduct(counterProduct -1);
       
    }
    const increaseProduct = () =>{
        setCounterProduct(counterProduct +1);
    }
    const numberProduct = (e) =>{
        e.preventDefault();
        setCounterProduct(e.target.value);
        basket.mount = numberProduct;
        
    }

    const removeFromBasket = () =>{
        
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        });
    }
  
    return (
        <div className="checkoutProduct">
            <img className ="checkoutProduct__image" src={image} alt="" />
            <div className ="checkoutProduct__info">
                <p className ="checkoutProduct__title">{title}</p>
                <p className ="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon style={{ color:'#FE9A2E' }} />
                    ))}
                </div>
                <div className="counter__product">
                        <div className="counter__card">
                            <button onClick={decreaseProduct}>-</button>
                            <input type="number" min="1" max="5" className="number__counter" value={counterProduct} onChange={numberProduct}/>
                            <button onClick={increaseProduct}>+</button>
                        </div>
                <button onClick={removeFromBasket} >Remove from basket </button>
                </div>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
