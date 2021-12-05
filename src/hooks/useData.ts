import axios from "axios";
import { useState, useEffect } from "react";

const useData = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState<string | null>(null);

  const [state, setState] = useState({
    user: "",
    token: "",
    products: [{}],
    cart: {},
  });

  useEffect(() => {
    axios.get("https://ge-buyit.herokuapp.com/api/products").then((res) => {
      setState((prev) => ({
        ...prev,
        products: res.data,
      }));
    });
  }, []);

  // const navigate = useNavigate();

  const register = (userObj: {}) => {
    axios
      .post("https://ge-buyit.herokuapp.com/api/users/register", userObj)
      .then((res) => console.log(res.data));
  };

  const login = (userObj: {}) => {
    axios
      .post("https://ge-buyit.herokuapp.com/api/users/login", userObj)
      .then((res) => {
        console.log(res.data);
        // setUser(res.data.user);
        // setToken(res.data.token);
        setState((prev) => ({
          ...prev,
          user: res.data.user,
          token: res.data.token,
        }));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
      });
  };

  const logout = () => {
    localStorage.clear();
    setState((prev) => ({
      ...prev,
      user: "",
      token: "",
    }));
  };

  const addToCart = (productObj: {}) => {
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;
      console.log(productObj, id);
      axios
        .post(
          `https://ge-buyit.herokuapp.com/api/shoppingCart/${id}`,
          productObj
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const getCart = () => {
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;
      axios
        .get(`https://ge-buyit.herokuapp.com/api/shoppingCart/${id}`)
        .then((res) => {
          console.log(res.data);
          setState((prev) => ({
            ...prev,
            cart: res.data,
          }));
        });
    }
  };

  const checkout = (source: {}) => {
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;
      axios
        .post(`https://ge-buyit.herokuapp.com/api/order/${id}`, source)
        .then((res) => {
          console.log(res.data);
          // setState((prev) => ({
          //   ...prev,
          //   cart: res.data,
          // }));
        });
    }
  };
  return {
    register,
    login,
    logout,
    addToCart,
    getCart,
    checkout,
    state,
    setState,
  };
};

export default useData;
