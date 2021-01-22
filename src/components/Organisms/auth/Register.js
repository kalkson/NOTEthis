import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import GoogleButton from 'components/Atoms/GoogleButton/GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'assets/vector/google-icon.svg';
import StyledAuthWrapper from './AuthWrapper.styled';
import withLogin from './withLogin';

const StyledRegister = styled(StyledAuthWrapper)``;

const Register = ({ setPassword, setEmail, handleSubmit }) => {
  return (
    <StyledRegister>
      <h2>Zarejestruj się</h2>
      <form onSubmit={e => handleSubmit(e, 'register')}>
        <label htmlFor="email">
          e-mail
          <br />
          <input
            name="email"
            id="email"
            type="e-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          hasło
          <br />
          <input
            name="password"
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Dalej</button>
        <GoogleButton>
          <GoogleIcon />
          Zarejestruj z Google
        </GoogleButton>
      </form>
    </StyledRegister>
  );
};

Register.propTypes = {
  setPassword: propTypes.func.isRequired,
  setEmail: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default withLogin(Register);
