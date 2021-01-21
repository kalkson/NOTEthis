import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { modifyTodos, addTodos, deleteTodos, throwTodos, returnTodos } from 'components/store/Actions/actions';
import { ReactComponent as AddSVG } from 'assets/vector/add-task-icon.svg';
import { ReactComponent as ArrowRightSVG } from '../../../assets/vector/arrow-right-icon.svg';
import { ReactComponent as CheckedSVG } from '../../../assets/vector/checked-icon.svg';
import { ReactComponent as UncheckedSVG } from '../../../assets/vector/unchecked-icon.svg';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';
import ListInput from '../ListInput/ListInput';

const StyledListElement = styled.li`
  cursor: pointer;
  margin: 9px 0;
  position: relative;
  width: fit-content;
  font-size: 1.9rem;

  & button {
    border: none;
    background: transparent;
    outline: none;
    transition: font-size 0.05s ease-in-out;

    font-weight: ${({ isActive }) => (isActive ? 'bold' : null)};
    font-size: ${({ isActive, type }) => (isActive && type === 'main' ? '3rem' : '1.9rem')};
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

  animation-name: list-element-appear;
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;

  @keyframes list-element-appear {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1
      transform: translateY(0);
    }
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;

  .unchecked-icon,
  .add-button-icon {
    margin-right: 6px;
    width: 14px;
    height: 14px;
    transform: translateY(1px);
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const ListElement = ({
  children,
  className,
  type,
  counter,
  isActive,
  modifyTodoElement,
  addTodoElement,
  deleteTodoElement,
  throwTodoElement,
  returnTodoElement,
  isCompletedTodo,
  id,
}) => {
  const [elementValue, setElementValue] = useState('');
  // const [textContent, setTextContent] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [listId, setListId] = useState(null);

  const listElement = useRef(null);
  const elementToDelete = useRef(null);

  useEffect(() => {
    setListId(id);
  });

  const handlePenClick = (what = null) => {
    if (what !== 'newItem') {
      setPreviousValue(listElement.current.textContent);
      setElementValue(listElement.current.textContent);
    } else {
      setPreviousValue('dodaj nowe zadanie');
      setElementValue('dodaj nowe zadanie');
    }
  };

  const handleDeleteClick = () => {
    deleteTodoElement(listElement.current.textContent, listId);
    Array.from(listElement.current.children).map(child => child.remove());
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setElementValue('');
    if (value === null || value === '') {
      if (type === 'uncompleted-task') modifyTodoElement(previousValue, previousValue, listId);
    } else {
      if (type === 'uncompleted-task') modifyTodoElement(value, previousValue, listId);
      if (type === 'add-button') addTodoElement(value, listId);
    }
  };

  const handleTodoItemClick = e => {
    throwTodoElement(e.target.textContent, listId);
  };

  const handleCompletedItemClick = e => {
    returnTodoElement(e.target.textContent, listId);
  };

  switch (type) {
    case 'main': {
      return (
        <StyledListElement type="main" counter={counter} className={className} isActive={isActive}>
          {children}
        </StyledListElement>
      );
    }
    case 'active-item': {
      return (
        <StyledListElement type="active-item" className={className} isActive={isActive}>
          <ArrowRightSVG className="arrow-right-icon" />
          {children}
        </StyledListElement>
      );
    }
    case 'completed-task': {
      return (
        <StyledListElement type="completed-task" className={className}>
          <CheckedSVG className="checked-icon" />
          <button onClick={isCompletedTodo ? e => handleCompletedItemClick(e) : null} type="button">
            {children}
          </button>
        </StyledListElement>
      );
    }
    case 'uncompleted-task': {
      if (elementValue.length !== 0) {
        return (
          <>
            <StyledSpan>
              <UncheckedSVG className="unchecked-icon" />
              <ListInput type="list" handleSubmit={handleSubmit} value={elementValue} />
            </StyledSpan>
          </>
        );
      }
      return (
        <StyledListElement type="uncompleted-task" className={className} ref={listElement}>
          <UncheckedSVG
            className="unchecked-icon"
            ref={elementToDelete}
            onClick={isCompletedTodo ? () => handleTodoItemClick() : null}
          />
          <button type="button" onClick={e => handleTodoItemClick(e)}>
            {children}
          </button>
          <PenSVG className="pen-icon" onClick={() => handlePenClick()} />
          <DeleteSVG className="delete-icon" onClick={() => handleDeleteClick()} />
        </StyledListElement>
      );
    }
    case 'add-button': {
      if (elementValue.length !== 0)
        return (
          <StyledSpan>
            <AddSVG className="add-button-icon" />
            <ListInput type="list" handleSubmit={handleSubmit} value={elementValue} />
          </StyledSpan>
        );
      return (
        <StyledListElement type="add-button" className={className} onClick={() => handlePenClick('newItem')}>
          <AddSVG className="add-button-icon" />
          {children}
        </StyledListElement>
      );
    }
    default:
      return <StyledListElement className={className}>{children}</StyledListElement>;
  }
};

ListElement.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
  className: propTypes.string,
  type: propTypes.string,
  counter: propTypes.number,
  isActive: propTypes.bool,
  id: propTypes.number,
  modifyTodoElement: propTypes.func.isRequired,
  addTodoElement: propTypes.func.isRequired,
  deleteTodoElement: propTypes.func.isRequired,
  throwTodoElement: propTypes.func.isRequired,
  returnTodoElement: propTypes.func.isRequired,
  isCompletedTodo: propTypes.bool,
};

ListElement.defaultProps = {
  className: null,
  type: null,
  isActive: null,
  counter: 0,
  id: null,
  isCompletedTodo: false,
};

const mapDispatchToProps = dispatch => {
  return {
    modifyTodoElement: (title, previousValue, id) => dispatch(modifyTodos(title, previousValue, id)),
    addTodoElement: (title, id) => dispatch(addTodos(title, id)),
    deleteTodoElement: (title, id) => dispatch(deleteTodos(title, id)),
    throwTodoElement: (title, id) => dispatch(throwTodos(title, id)),
    returnTodoElement: (title, id) => dispatch(returnTodos(title, id)),
  };
};

export default connect(null, mapDispatchToProps)(ListElement);
