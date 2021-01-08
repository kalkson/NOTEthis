import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledListElement = styled.li`
  cursor: pointer;
  margin: 9px 0;

  & button {
    border: none;
    background: transparent;
    outline: none;
  }
`;

const ListElement = ({ children, className, type }) => {
  switch (type) {
    case 'main': {
      return (
        <StyledListElement className={className}>{children}</StyledListElement>
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
};

ListElement.defaultProps = {
  className: null,
  type: null,
};

export default ListElement;
