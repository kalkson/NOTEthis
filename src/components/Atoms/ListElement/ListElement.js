import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as AddSVG } from 'assets/vector/add-task-icon.svg';
import { ReactComponent as ArrowRightSVG } from '../../../assets/vector/arrow-right-icon.svg';
import { ReactComponent as CheckedSVG } from '../../../assets/vector/checked-icon.svg';
import { ReactComponent as UncheckedSVG } from '../../../assets/vector/unchecked-icon.svg';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

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

  ${({ type, theme }) =>
    type === 'add-button'
      ? `
        padding: 2px;
    background-color: ${theme.colors.secondary};

    & > button {
      font-weight: bold;
      font-style: italic;
    }
    `
      : null}

  ${({ type }) =>
    type === 'add-button' || type === 'uncompleted-task'
      ? `
        transition: transform 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
        &:hover {
          transform: translateY(-2px);
          
          button {
            text-decoration: underline;
          }
        }
    `
      : null}

  ${({ type }) =>
    type === 'completed-task'
      ? `
        &:hover {
          button {
            text-decoration: line-through;
          }
        }
    `
      : null}

  .arrow-right-icon {
    margin-right: 6px;
    transform: translateY(-1px);
  }

  .checked-icon,
  .unchecked-icon,
  .add-button-icon {
    margin-right: 6px;
    width: 14px;
    height: 14px;
    transform: translateY(1px);
  }

  .checked-icon {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  .unchecked-icon {
    fill: ${({ theme }) => theme.colors.primary};
  }

  .add-button-icon {
    fill: ${({ theme }) => theme.colors.primary};
    margin-left: 2px;
  }

  .pen-icon,
  .delete-icon {
    height: 12px;
    width: 12px;
    margin-left: 4px;
    /* transform: translateY(0px); */
    cursor: pointer;
    visibility: hidden;

    transition: transform 200ms ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }

    & path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    .pen-icon,
    .delete-icon {
      visibility: visible;
    }
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
    case 'uncompleted-task': {
      return (
        <StyledListElement type="uncompleted-task" className={className}>
          <UncheckedSVG className="unchecked-icon" />
          {children}
          <PenSVG className="pen-icon" />
          <DeleteSVG className="delete-icon" />
        </StyledListElement>
      );
    }
    case 'add-button': {
      return (
        <StyledListElement type="add-button" className={className}>
          <AddSVG className="add-button-icon" />
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
