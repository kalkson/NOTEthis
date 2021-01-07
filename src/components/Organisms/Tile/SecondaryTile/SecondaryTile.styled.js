import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledSecondaryTile = styled(StyledTile)`
  transform: translateX(-100%);
  z-index: 9;
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateX(0);
    opacity: 1;
  `}

  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
`;

export default StyledSecondaryTile;
