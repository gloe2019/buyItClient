// import React, { useEffect } from "react";
import Page from "../interfaces/page";
import Navbar from "./Navbar";
import Products from "./Products";
import useData from "../hooks/useData";

const Home: React.FunctionComponent<Page> = (props) => {

  const { addToCart } = useData()

  return (
    <>
      <Navbar state={props.state} logout={props.function} />
      <Products name="Products" state={props.state} addToCart={addToCart} />
    </>
  );
};

export default Home;
