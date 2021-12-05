import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import routes from "./config/routes";
import useData from "./hooks/useData";
import Home from "./components/Home";
// import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
// Routing should be done from here --> connect to backend!

const App = () => {
  const { register, login, logout, state, addToCart, getCart, setState } = useData()
  useEffect(() => {
    let _user = localStorage.getItem('user')
    if (_user) {
      _user = JSON.parse(_user)
    }
    let _token = localStorage.getItem('token')
    if (_user && _token) {
      setState({
        ...state,
        user: _user,
        token: _token
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ setState ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component name={route.name}
                  properties={{ register, login, state }}
                />}
              />
            );
          })} */}
          <Route path="/" element={<Home name="Home" state={state} function={logout} />} />
          <Route path="/register" element={<Register name="Register" function={register} />} />
          <Route path="/login" element={<Login name="Login" function={login} state={state} />} />
          <Route path="/cart" element={<Cart addToCart={addToCart} getCart={getCart} state={state} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
