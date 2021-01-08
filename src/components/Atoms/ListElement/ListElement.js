import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as ArrowRightSVG } from '../../../assets/vector/arrow-right-icon.svg';
import { ReactComponent as CheckedSVG } from '../../../assets/vector/checked-icon.svg';
// import { ReactComponent as UncheckedSVG } from '../../../assets/vector/unchecked-icon.svg';

const StyledListElement = styled.li`
  cursor: pointer;
  margin: 9px 0;
  position: relative;
  width: fit-content;
  /* display: flex; */
  /* align-items: center; */

  & button {
    border: none;
    background: transparent;
    outline: none;
    transition: font-size 0.05s ease-in-out;

    font-weight: ${({ isActive }) => (isActive ? 'bold' : null)};
    font-size: ${({ isActive, type }) =>
      isActive && type === 'main' ? '3rem' : '1.9rem'};
  }

  &:after {
    ${({ type, counter, theme }) =>
      type === 'main'
        ? `
        content: '${counter}';
        background-color: ${theme.colors.secondary};
        display: flex;
        width: 18px;
        height: 18px;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(50% - 9px);
        right: -24px;
        font-size: 1.3rem;
        border-radius: 10px;
    `
        : null}
  }

  .arrow-right-icon {
    margin-right: 6px;
    transform: translateY(-1px);
  }

  .checked-icon {
    fill: ${({ theme }) => theme.colors.secondary};
    margin-right: 6px;
    width: 18px;
    height: 18px;
    transform: translateY(2px);
  }
`;

const ListElement = ({ children, className, type, counter, isActive }) => {
  console.log(isActive);
  switch (type) {
    case 'main': {
      return (
        <StyledListElement
          type="main"
          counter={counter}
          className={className}
          isActive={isActive}
        >
          {children}
        </StyledListElement>
      );
    }
    case 'active-item': {
      return (
        <StyledListElement
          type="active-item"
          className={className}
          isActive={isActive}
        >
          <ArrowRightSVG className="arrow-right-icon" />
          {children}
        </StyledListElement>
      );
    }
    case 'completed-task': {
      return (
        <StyledListElement type="completed-task" className={className}>
          <CheckedSVG className="checked-icon" />
          {children}
        </StyledListElement>
      );
    }
    default:
      return (
        <StyledListElement className={className}>{children}</StyledListElement>
      );
  }
};

ListElement.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  type: propTypes.string,
  counter: propTypes.number,
  isActive: propTypes.bool,
};

ListElement.defaultProps = {
  className: null,
  type: null,
  isActive: null,
  counter: 0,
};

export default ListElement;
