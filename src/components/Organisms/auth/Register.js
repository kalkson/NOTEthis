import React from 'react';
import styled from 'styled-components';
import GoogleButton from 'components/Atoms/GoogleButton/GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'assets/vector/google-icon.svg';
import StyledAuthWrapper from './AuthWrapper.styled';

const StyledRegister = styled(StyledAuthWrapper)``;

const Register = () => {
  return (
    <StyledRegister>
      <h2>Zarejestruj się</h2>
      <GoogleButton>
        <GoogleIcon />
        Zarejestruj z Google
      </GoogleButton>
    </StyledRegister>
  );
};

export default Register;
