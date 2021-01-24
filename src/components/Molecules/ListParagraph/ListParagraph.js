import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { addNotes } from 'components/store/Actions/actions';
import { connect } from 'react-redux';

const StyledListParagraph = styled.div`
  & form {
    width: 100%;
    display: flex;
    flex-direction: column;

    & button {
      align-self: flex-end;
      padding: 5px;
      font-size: 1.9rem;
      font-style: italic;
      border: none;
      outline: none;
      background: transparent;
    }
  }

  & textarea {
    width: 100%;
    margin: 15px 0 5px;
    height: 200px;
    font-size: 1.9rem;
    padding: 10px;
  }
`;

const ListParagraph = ({ children, addNotesToStore, title, id }) => {
  const [textareaText, setTextareaText] = useState('');
  const [paragraphText, setParagraphText] = useState(' ');
  const [isTextareaVisible, setTextareaVisibility] = useState(false);

  const paragraphElement = useRef(null);
  const textareaElement = useRef(null);

  const handleDoubleClick = () => {
    setTextareaVisibility(true);
    setTextareaText(paragraphText);
    textareaElement.current.value = paragraphText;
    textareaElement.current.focus();
    textareaElement.current.select();
  };

  const handleSubmit = e => {
    setTextareaVisibility(false);
    e.preventDefault();
    setParagraphText(paragraphText);
    setTextareaText('');
    addNotesToStore(textareaText, title, id);
  };

  const handleChange = e => {
    setTextareaText(e.target.value);
  };

  useEffect(() => {
    console.dir(children);
    setParagraphText(children);
    paragraphElement.current?.addEventListener('dblclick', handleDoubleClick);

    if (paragraphElement.current !== null)
      return () => {
        paragraphElement.current?.removeEventListener(
          'dblclick',
          handleDoubleClick
        );
      };
    return null;
  }, [children, paragraphText]);

  if (isTextareaVisible)
    return (
      <StyledListParagraph>
        <form onSubmit={e => handleSubmit(e)}>
          <textarea
            onChange={e => handleChange(e)}
            ref={textareaElement}
            name="paragraphData"
          />
          <button type="submit">Edytuj</button>
        </form>
      </StyledListParagraph>
    );

  if (children)
    return (
      <StyledListParagraph>
        <p ref={paragraphElement}>{children}</p>
      </StyledListParagraph>
    );

  return (
    <StyledListParagraph>
      <p ref={paragraphElement}>Kliknij szybko dwa razy, by coś napisać</p>
    </StyledListParagraph>
  );
};

ListParagraph.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.shape(propTypes.node),
  ]),
  addNotesToStore: propTypes.func.isRequired,
  title: propTypes.string,
  id: propTypes.number,
};

ListParagraph.defaultProps = {
  children: 'Kliknij szybko dwa razy, by coś napisać',
  id: null,
  title: null,
};

const mapDispatchToProps = dispatch => {
  return {
    addNotesToStore: (value, title, id) => dispatch(addNotes(value, title, id)),
  };
};

export default connect(null, mapDispatchToProps)(ListParagraph);
