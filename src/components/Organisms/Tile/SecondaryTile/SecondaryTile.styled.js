import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledSecondaryTile = styled(StyledTile)`
  transform: translateX(-100%);
  z-index: 9;

  transition: transform 300ms ease-in;
`;

export default StyledSecondaryTile;
