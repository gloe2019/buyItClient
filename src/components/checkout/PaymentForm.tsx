//import StripeInput from "../checkout/stripe/StripeInput"
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//PaymentIntent
//import { CardElement } from 'react-stripe-elements';
import Button from "@mui/material/Button"
interface PaymentProps {
  paymentValues: any;
  changePaymentValue: Function;
}

const PaymentForm = ({ paymentValues, changePaymentValue }: PaymentProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const PUB_KEY = 'pk_test_51JZrwGEdm1IZOyl8pyRWcDlRHJsdil0p72n0IINC4JWPXwallhwr6ois9H8J2Uyqth97vjLhbKZLqh9ruh20U1Ay00ULY0RWzw'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (stripe === null) {
      throw new Error(`Stripe is null`)
    }
    if (elements === null) {
      throw new Error(`stripe elements is null`)
    }

    const element = elements.getElement(CardElement)
    if (element === null) {
      throw new Error(`stripe elements element is null`)
    }
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: element
    // })
  }
  return (
    <Fragment>
      <Grid sx={{ margin: 2, padding: 2, lineHeight: 1.5 }}>
        <Typography variant="h6" >
          Payment method
        </Typography>
        <Elements stripe={loadStripe(PUB_KEY)}>
          <form id='payment-form' onSubmit={handleSubmit}>
            <label htmlFor="card-element"></label>
            <CardElement id='card_element' />
            <Button type='submit'>Pay</Button>
            {/*<form id="payment-form"> {/* //onSubmit={handleSubmit}> 
          <label htmlFor="card-element">Card</label>
          <CardElement id="card_element" />
          <button>Pay</button>
        </form> */}
          </form>
        </Elements>
      </Grid>
    </Fragment>
  );
};

export default PaymentForm;
