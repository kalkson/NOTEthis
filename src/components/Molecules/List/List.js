import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

const List = ({ children }) => <StyledList>{children}</StyledList>;

List.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default List;
