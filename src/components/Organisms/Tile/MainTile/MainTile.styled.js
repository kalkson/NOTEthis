import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledMainTile = styled(StyledTile)`
  z-index: 10;

  .main {
    &__list {
      margin: 40px 0;
    }
  }
`;

export default StyledMainTile;
