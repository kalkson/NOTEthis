import styled from 'styled-components';

const GoogleButton = styled.button`
  width: 100%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  outline: none;
  border: none;
  background-color: #4688f1;
  padding: 12px 18px;
  position: relative;
  justify-content: center;
  margin-top: 100px;

  &::focus,
  &:hover {
    outline: none;
    border: none;
  }

  & svg {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 12px;
    top: 9px;
    fill: ${({ theme }) => theme.colors.background};
  }
`;

export default GoogleButton;
