// import axios from "axios"
import { useEffect } from "react"
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import Navbar from "./Navbar"
import Button from "@mui/material/Button"
/*
cart.shoppingCart
items: [{productId, name, quantity, price, _id(not sure what this is for)

}]
total:
userId
_id:

*/
const Cart = (props: any) => {
  const { getCart, state } = props
  const cart: any = props.state.cart.shoppingCart
  let total;
  let items = [];
  if (typeof cart === "object") {
    // console.log(cart, cart.total, cart.items)
    total = cart.total.toFixed(2)
    items = cart.items

  }
  useEffect(() => {
    getCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Navbar state={state} />

      <TableContainer sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 5
      }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>Cart Details</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${total}</TableCell>
            </TableRow>
          </TableBody>
          <Button variant="contained" color='inherit' href="/checkout">Checkout</Button>
        </Table>

      </TableContainer>
    </>
  )
}

export default Cart