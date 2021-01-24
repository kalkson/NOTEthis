import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = ({ children, className }) => <StyledList className={className}>{children}</StyledList>;

List.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.string,
};

List.defaultProps = {
  className: null,
  children: undefined,
};

export default List;
