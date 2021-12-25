import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Login/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/allProducts">
              <AllProducts />
            </PrivateRoute>
            <PrivateRoute path="/details/:id">
              <Details />
            </PrivateRoute>
            <PrivateRoute path="/dashboardHome">
              <DashboardHome />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
