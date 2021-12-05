import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Chip from "@mui/material/Chip"
import Snackbar from '@mui/material/Snackbar';

interface product {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  addToCart: Function;
  state: any
}



const Product = (props: product) => {
  // console.log('product props', props)
  const state = props.state
  const addToCart = props.addToCart
  const navigate = useNavigate()

  const [ open, setOpen ] = useState(false)

  const handleClick = (event: React.MouseEvent) => {
    // console.log(event.target)
    if (state.user) {
      let productId = event.currentTarget.id
      let quantity = 1
      let productObj = {
        productId,
        quantity
      }
      addToCart(productObj)
      setOpen(true)
    }
    else {
      navigate('/login')
    }
  }
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'click-out') {
      return;
    }
    setOpen(false)
  }

  // console.log(">>>product props", props)
  return (
    <Grid item>

      <Card sx={{ maxHeight: 500, maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt={props.name}
          height="250"
          image={props.image}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Chip label={props.quantity} size="small" variant="outlined" />
          <Typography variant="subtitle1" component="div">
            ${props.price}
          </Typography>
          <Typography
            variant="body1" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" id={props._id} onClick={handleClick} endIcon={<AddShoppingCart />} >
            Add to Cart
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Item added to cart"
          />
        </CardActions>
      </Card>
    </Grid >
  )
}





export default Product