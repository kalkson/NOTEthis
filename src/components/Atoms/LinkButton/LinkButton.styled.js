import styled from 'styled-components';

const StyledLinkButton = styled.button`
  background: transparent;
  border: ${({ border }) =>
    border ? `solid 1px ${({ theme }) => theme.colors.primary}` : 'none'};
`;

export default StyledLinkButton;
