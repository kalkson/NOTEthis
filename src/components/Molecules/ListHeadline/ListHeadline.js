import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import ListInput from 'components/Atoms/ListInput/ListInput';
import StyledListHeadline from './ListHeadline.styled';
import { ReactComponent as PenSVG } from '../../../assets/vector/pen-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/vector/delete-icon.svg';

const ListHeadline = ({ children, className }) => {
  const headline = useRef(null);
  const [headlineValue, setHeadlineValue] = useState('');
  const [textContent, setTextContent] = useState(null);

  const handlePenClick = () => {
    setHeadlineValue(headline.current.textContent);
    // headlineInput.current?.value = headlineValue;
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    setHeadlineValue('');
    setTextContent(value);
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
};

ListHeadline.defaultProps = {
  className: null,
};

export default ListHeadline;
