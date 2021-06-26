import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const handleSubmit = e => {
        //do all the stripe work...
    }

    const handleChange = e => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                {/* Payment section -- delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Helsinki, Finland</p>
                    </div>
                </div>
                {/* Payment section --Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section --Payment method */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
