import React from "react";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100; // stripes processes the payment in cents
    const publishableKey = 'pk_test_51HXn1iJs7qXhVWY5bLaO8f6RubSOTCQnLLzoUYGYMoyvakuPkW7aN66ywxVLmm1ox6qbKOJZfYSdB2OyvLL3WfCz00l5Aa8WEU';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Thre was an issue with your payment. Please make sure you use the provided credit card');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;