import React from 'react'
import './Product.css'
import { StarFilled } from '@ant-design/icons';
import { useStateValue } from './StateProvider';



function Product({ id, title, price, image, rating }) {


    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Open snackbar
        //Add item to basekt
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };

 

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <StarFilled style={{ color: '#b2a300' }} />
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
