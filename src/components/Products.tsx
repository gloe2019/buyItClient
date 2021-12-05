import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Product from "./Product"

const Products = (props: { name: string, state: { user: string, token: string, products: any }, addToCart: Function }) => {
  // console.log("products props", props)
  if (props.state.products) {
    var products = props.state.products.map((product: any, index: number) => {
      return (<Product {...product} key={index} state={props.state} addToCart={props.addToCart} />)
    })
  }
  return (
    <Container >
      <Box>
        <Grid container spacing={5}
          sx={{ paddingTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {products}

        </Grid>

      </Box>

    </Container>
  )
}

export default Products