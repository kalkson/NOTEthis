import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledMainTile = styled(StyledTile)`
  z-index: 8;

  .main {
    &__list {
      margin: 40px 0;
    }
  }

  @media (min-width: 1024px) {
    z-index: 10;
  }
`;

export default StyledMainTile;
