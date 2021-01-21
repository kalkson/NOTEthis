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

  .second {
    &__list-container {
      margin: 10px 0 30px 0;
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

    &__active-list {
      border-bottom: solid 1px ${({ theme }) => theme.colors.secondary};
    }

    &__archived-list {
      & li button {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    &__notice {
      margin-top: auto;
      text-align: center;
    }
  }
`;

export default StyledSecondaryTile;
