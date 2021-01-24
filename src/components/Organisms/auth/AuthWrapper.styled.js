import styled from 'styled-components';

const StyledAuthWrapper = styled.div`
  width: 80%;

  form {
    display: flex;
    flex-direction: column;

    & label {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 10px;

      & input {
        width: 100%;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        font-size: 2rem;
        padding: 10px;

        &:focus,
        &:hover {
          outline: none;
          border: none;
        }
      }
    }

    & button[type='submit'] {
      border: none;
      outline: none;
      width: 100px;
      align-self: flex-end;
      font-size: 1.9rem;
      padding: 8px;
      background-color: ${({ theme }) => theme.colors.secondary};

      &:focus,
      &:hover {
        outline: none;
        border: none;
      }
    }
  }
`;

export default StyledAuthWrapper;
