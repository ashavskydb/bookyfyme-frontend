import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import { login, register } from "../../store/actions/authActions";
import './LoginRegister.css';

const LoginRegister = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRegister = async () => {
    if (page === "Login") {
      await dispatch(login({ email, password }));
    } else {
      await dispatch(register({ email, password }));
    }

    if (token) {
      navigate("/dashboard");
    }
  };

  return (
    <Box className="container">
      <Typography variant="h4" component="h2" gutterBottom>
        {page}
      </Typography>
      <Box component="form" className="form" noValidate autoComplete="off">
        <TextField
          className="textField"
          id="email"
          type="email"
          label="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="textField"
          id="password"
          type="password"
          label="Enter your Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="button"
          variant="contained"
          onClick={handleLoginRegister}
          disabled={loading}
        >
          {page}
        </Button>
      </Box>
      {error && <Typography className="error">{error}</Typography>}
    </Box>
  );
};

export default LoginRegister;
