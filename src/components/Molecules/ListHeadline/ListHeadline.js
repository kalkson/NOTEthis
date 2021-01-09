import React, { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ListInput from 'components/Atoms/ListInput/ListInput';
import { modifyNote } from 'components/store/Actions/actions';
import StyledListHeadline from './ListHeadline.styled';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

const ListHeadline = ({ children, className, modify }) => {
  const headline = useRef(null);
  const [headlineValue, setHeadlineValue] = useState('');
  const [textContent, setTextContent] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  useEffect(() => {
    setTextContent(null);
  }, [children]);

  const handlePenClick = () => {
    setHeadlineValue(headline.current.textContent);
    setPreviousValue(headline.current.textContent);
    // headlineInput.current.value = headlineValue;
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setHeadlineValue('');
    setTextContent(value);
    modify(value, previousValue);
    // headline.textContent = value;
  };

  if (headlineValue.length !== 0)
    return (
      <ListInput
        value={headlineValue}
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
      <DeleteSVG className="delete-icon" />
    </StyledListHeadline>
  );
};

ListHeadline.propTypes = {
  children: propTypes.oneOfType([
    propTypes.shape(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  modify: propTypes.func.isRequired,
};

ListHeadline.defaultProps = {
  className: null,
};

const mapDispatchToProps = dispatch => {
  return {
    modify: (title, previousValue) =>
      dispatch(modifyNote(title, previousValue)),
  };
};

export default connect(null, mapDispatchToProps)(ListHeadline);
