import React, { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ListInput from 'components/Atoms/ListInput/ListInput';
import {
  modifyNote,
  modifyTodo,
  deleteNote,
  deleteTodo,
} from 'components/store/Actions/actions';
import StyledListHeadline from './ListHeadline.styled';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

const ListHeadline = ({
  children,
  className,
  modifyNoteTitle,
  modifyTodoTitle,
  deleteNoteElement,
  deleteTodoElement,
  type,
  setThirdActivity,
}) => {
  const headline = useRef(null);
  const [headlineInputValue, setHeadlineInputValue] = useState('');
  const [headlineValue, setHeadlineValue] = useState('');
  const [textContent, setTextContent] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  useEffect(() => {
    setTextContent(null);
    setHeadlineInputValue('');
    setHeadlineValue(headline.current?.textContent);
  }, [children]);

  const handleDeleteClick = () => {
    setThirdActivity(false);
  };

  const handlePenClick = () => {
    setHeadlineInputValue(headline.current.textContent);
    setPreviousValue(headline.current.textContent);
    // headlineInput.current.value = HeadlineInputValue;
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setHeadlineInputValue('');
    setTextContent(value);
    if (type === 'note') modifyNoteTitle(value, previousValue);
    if (type === 'todo') modifyTodoTitle(value, previousValue);
    // headline.textContent = value;
  };

  if (headlineInputValue.length !== 0)
    return (
      <ListInput
        value={headlineInputValue}
        handleSubmit={handleSubmit}
        type="headline"
      />
    );

  return (
    <StyledListHeadline className={className} ref={headline}>
      {textContent || children}
      <PenSVG
        className="pen-icon"
        role="button"
        onClick={() => handlePenClick()}
      />
      {type === 'todo' && (
        <DeleteSVG
          className="delete-icon"
          onClick={() => {
            deleteTodoElement(headlineValue);
            handleDeleteClick(false);
          }}
        />
      )}
      {type === 'note' && (
        <DeleteSVG
          className="delete-icon"
          onClick={() => {
            deleteNoteElement(headlineValue);
            handleDeleteClick(false);
          }}
        />
      )}
    </StyledListHeadline>
  );
};

ListHeadline.propTypes = {
  children: propTypes.oneOfType([
    propTypes.shape(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  modifyNoteTitle: propTypes.func.isRequired,
  modifyTodoTitle: propTypes.func.isRequired,
  deleteNoteElement: propTypes.func.isRequired,
  deleteTodoElement: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  setThirdActivity: propTypes.string.isRequired,
};

ListHeadline.defaultProps = {
  className: null,
};

const mapDispatchToProps = dispatch => {
  return {
    modifyNoteTitle: (title, previousValue) =>
      dispatch(modifyNote(title, previousValue)),
    modifyTodoTitle: (title, previousValue) =>
      dispatch(modifyTodo(title, previousValue)),

    deleteNoteElement: (title, previousValue) =>
      dispatch(deleteNote(title, previousValue)),
    deleteTodoElement: (title, previousValue) =>
      dispatch(deleteTodo(title, previousValue)),
  };
};

export default connect(null, mapDispatchToProps)(ListHeadline);
