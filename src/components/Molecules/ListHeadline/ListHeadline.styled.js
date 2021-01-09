import styled from 'styled-components';

const StyledListHeadline = styled.h3`
  display: flex;
  align-items: flex-end;
  /* width: fit-content; */

  .pen-icon,
  .delete-icon {
    height: 15px;
    width: 15px;
    margin-left: 5px;
    transform: translateY(-5px);
    cursor: pointer;

    transition: transform 200ms ease-in-out;

    &:hover {
      transform: translateY(-8px);
    }

    & path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default StyledListHeadline;
