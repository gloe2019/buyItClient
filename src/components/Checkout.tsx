// import Index from "./checkout"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./checkout/CheckoutForm"

const stripePromise = loadStripe("pk_test_51JZrwGEdm1IZOyl8pyRWcDlRHJsdil0p72n0IINC4JWPXwallhwr6ois9H8J2Uyqth97vjLhbKZLqh9ruh20U1Ay00ULY0RWzw")

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout