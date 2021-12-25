import "./login.css";
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
// import googleLogo from "../../../Images/Group 573.png";
// import logo from "../../../Images/logo.png";

const Login = () => {
  const [logInData, setLoginData] = useState({});
  const { logInUser, user, signInWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogIn = { ...logInData };
    newLogIn[field] = value;
    setLoginData(newLogIn);
  };

  const handleLogInSubmit = (e) => {
    logInUser(logInData.email, logInData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Navigation />
      <Container>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={logo} alt="" /> */}
        </Box>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 20 }}>
          Login
        </Typography>
        <Box className="form_body">
          <form onSubmit={handleLogInSubmit}>
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Email Address"
              variant="standard"
              name="email"
              type="email"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              onBlur={handleOnBlur}
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              name="password"
            />
            <br />
            <Button
              style={{
                background: " linear-gradient(#3b1f1f, #4f0606,#4b1717 )",
                color: "#fff",
                fontWeight: 700,
                width: "100%",
              }}
              type="submit"
            >
              Log in
            </Button>
          </form>

          <p sx={{ mt: 3 }}>
            Don't have a account?
            <Link style={{ color: "#782323" }} to="/register">
              Create a new account
            </Link>
          </p>

          <p>----------------OR-----------------</p>
          <Button
            onClick={handleGoogleSignIn}
            style={{
              border: "1px solid #000",
              borderRadius: "30px",
              color: "#000",
              fontWeight: 600,
            }}
          >
            {/* <img
              style={{ width: "20%", paddingRight: "30px" }}
              src={googleLogo}
              alt=""
            /> */}
            Continue with google
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
