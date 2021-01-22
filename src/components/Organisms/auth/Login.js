import React from 'react';
import styled from 'styled-components';
import GoogleButton from 'components/Atoms/GoogleButton/GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'assets/vector/google-icon.svg';
import StyledAuthWrapper from './AuthWrapper.styled';

const StyledLogin = styled(StyledAuthWrapper)``;

const Login = () => {
  return (
    <StyledLogin>
      <h2>Zaloguj się</h2>
      <form>
        <label htmlFor="email">
          e-mail
          <br />
          <input name="email" id="email" type="e-mail" />
        </label>
        <label htmlFor="password">
          hasło
          <br />
          <input name="password" id="password" type="password" />
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

export default Login;
