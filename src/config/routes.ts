import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import IRoute from "../interfaces/route";

//All page routes should be defined here.

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/register",
    name: "Registration Page",
    component: Register,
    exact: true,
  },
  {
    path: "/login",
    name: "Login Page",
    component: Login,
    exact: true,
  },
];

export default routes;
