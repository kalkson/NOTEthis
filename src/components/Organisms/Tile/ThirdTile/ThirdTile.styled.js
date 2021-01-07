import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledThirdTile = styled(StyledTile)`
  z-index: 8;
  transform: translateX(-100%);

  transition: transform 300ms ease-in;
`;

export default StyledThirdTile;
