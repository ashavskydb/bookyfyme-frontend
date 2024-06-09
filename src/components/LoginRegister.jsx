import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { login, register } from '../store/actions/authActions';

const LoginRegister = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginRegister = async () => {
    if (page === 'Login') {
      await dispatch(login({ email, password }));
    } else {
      await dispatch(register({ email, password }));
    }

    if (token) {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <h2>{page}</h2>
      <Box component="form" sx={{ m: 1 }} noValidate autoComplete="off">
        <TextField
          sx={{ m: 1 }}
          id="email"
          type="email"
          label="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="password"
          type="password"
          label="Enter your Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLoginRegister} disabled={loading}>
          {page}
        </Button>
      </Box>
      {error && <p>{error}</p>}
    </>
  );
};

export default LoginRegister;
