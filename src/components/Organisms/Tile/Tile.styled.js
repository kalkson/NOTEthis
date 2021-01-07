import styled from 'styled-components';

const StyledTile = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 30%;
  height: 60vh;
  box-shadow: 0px 0px 99px -45px rgba(0, 0, 0, 0.75);
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;

  & li button {
    font-size: 1.9rem;
  }
`;

export default StyledTile;
