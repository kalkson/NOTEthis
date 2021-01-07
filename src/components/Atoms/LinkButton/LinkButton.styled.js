import styled from 'styled-components';

const StyledLinkButton = styled.button`
  background: transparent;
  outline: none;
  border: ${({ border }) =>
    border ? `solid 1px ${({ theme }) => theme.colors.primary}` : 'none'};
  padding: ${({ border }) => (border ? '8px 16px' : null)};

  transition: transform 0.3s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default StyledLinkButton;
