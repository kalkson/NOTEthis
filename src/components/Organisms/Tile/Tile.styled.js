import styled from 'styled-components';

const StyledTile = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100vh;
  box-shadow: 0px 0px 99px -45px rgba(0, 0, 0, 0.75);
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    width: 30%;
    height: 60vh;
    position: relative;
  }
`;

export default StyledTile;
