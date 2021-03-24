import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css';
import { useStateValue } from '../StateProvider';


function Product({id,title,image,price,rating}) {

    const [{}, dispatch ] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p key={id}>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {
                    Array(rating).fill().map((_) => (
                        <p><StarIcon style={{ color:'#FE9A2E'}}/></p>
                    ))
                }
                </div>
            </div>
            
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
