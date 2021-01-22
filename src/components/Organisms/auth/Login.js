import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import GoogleButton from 'components/Atoms/GoogleButton/GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'assets/vector/google-icon.svg';
import StyledAuthWrapper from './AuthWrapper.styled';
import withLogin from './withLogin';

const StyledLogin = styled(StyledAuthWrapper)``;

const Login = ({ setPassword, setEmail, handleSubmit }) => {
  return (
    <StyledLogin>
      <h2>Zaloguj się</h2>
      <form onSubmit={e => handleSubmit(e, 'login')}>
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
          Zaloguj z Google
        </GoogleButton>
      </form>
    </StyledLogin>
  );
};

Login.propTypes = {
  setPassword: propTypes.func.isRequired,
  setEmail: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default withLogin(Login);
