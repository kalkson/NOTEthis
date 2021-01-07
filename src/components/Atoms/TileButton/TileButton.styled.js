import styled from 'styled-components';

const StyledTileButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  padding: 10px 0;

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;

export default StyledTileButton;
