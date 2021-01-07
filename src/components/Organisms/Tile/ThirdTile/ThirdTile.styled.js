import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledThirdTile = styled(StyledTile)`
  transform: translateX(-100%);
  z-index: 8;
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateX(0);
    opacity: 1;
  `}

  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;

  .third {
    &__headline {
      margin: 0;
      padding: 10px 0;
      font-size: 2.5rem;
      font-style: bold;
      border-bottom: solid 2px ${({ theme }) => theme.colors.secondary};
    }

    &__add-button {
      padding: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};

      & > button {
        font-weight: bold;
        font-style: italic;
      }
    }
  }
`;

export default StyledThirdTile;
