import styled from 'styled-components';
import StyledTile from '../Tile.styled';

const StyledThirdTile = styled(StyledTile)`
  transform: translateX(-100%);
  z-index: 10;
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateX(0);
    opacity: 1;
  `}

  @media (min-width: 1024px) {
    z-index: 8;
  }

  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;

  .third {
    &__headline {
      margin: 0;
      padding: 10px 0;
      font-size: 2.5rem;
      font-weight: bold;
      border-bottom: solid 2px ${({ theme }) => theme.colors.secondary};
    }

    &__active-list {
      border-bottom: solid 1px ${({ theme }) => theme.colors.secondary};
    }

    &__archived-list {
      & li button {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    &__list-container {
      margin: 30px 0;
      overflow-y: hidden;

      ::-webkit-scrollbar {
        width: 3px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    &__list-container:hover {
      overflow-y: scroll;
    }
  }
`;

export default StyledThirdTile;
