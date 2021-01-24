import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledMainTile = styled(StyledTile)`
  z-index: 8;

  align-items: ${({ centered }) => (centered ? 'center' : null)};
  justify-content: ${({ centered }) => (centered ? 'center' : null)};

  .main {
    &__list {
      margin: 40px 0;
    }

    &__authButton {
      border: none;
      background: transparent;
      outline: none;
      text-decoration: underline;
      font-weight: bold;

      &:focus {
        outline: none;
      }
    }

    &__logo {
      @media (min-width: 1024px) {
        display: none;
      }

      path:last-child {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (min-width: 1024px) {
    z-index: 10;
  }
`;

export default StyledMainTile;
