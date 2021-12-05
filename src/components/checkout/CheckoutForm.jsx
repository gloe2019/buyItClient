
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useNavigate } from "react-router";
import useData from "../../hooks/useData";



const CardSection = () => {
 
  return (
    <label>
      Card Details
      <CardElement />
    </label>
  )
}

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements()
  const { checkout } = useData()
  const navigate = useNavigate()

  const stripeTokenHandler = async (token) => {
    const paymentData = { token: token.id };
    const source = paymentData
    checkout(source)
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;

      const response = await fetch(`http://ge-buyit.herokuapp.com/api/order/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData),
      })
      // Return and display the result of the charge.
      return response.json();
    }


  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return
    
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card)

    if (result.error) {
      console.log(result.error.message)
      
    } else {
      console.log('sending payment...')
      stripeTokenHandler(result.token).then(navigate('/'))
      // navigate('/')
    }


  }


  return (
    <Card sx={{ maxHeight: 500, maxWidth: 350, margin: 'auto'}}>
    <form onSubmit={handleSubmit}>
      <CardSection />
      <Button type="submit">Confirm Order</Button>
    </form>
    </Card>
  )
}

export default CheckoutForm