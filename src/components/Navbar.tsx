import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = (props: any) => {
  const logout = props.logout
  const handleClick = () => {
    logout()
  }
  // console.log('navbar props', typeof props.state.user)
  // const user = JSON.parse(props.state.user)
  // console.log(user)
  return (
    <nav>
      <AppBar position='relative'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            sx={{ mr: 2 }}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            BUY_IT
            <Button color="inherit" href="/">Products</Button>
          </Typography>
          {props.state.user && <Button color="inherit" href="/cart" endIcon={<ShoppingCartIcon />} >
            CART
          </Button>}
          {!props.state.user && <Button color='inherit' href="/register">Register</Button>}
          {props.state.user ? <Button color='inherit' onClick={handleClick}>Logout</Button> : <Button color="inherit" href="/login">Login</Button>}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
