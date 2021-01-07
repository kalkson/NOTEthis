import React from 'react';
import propTypes from 'prop-types';
import StyledTile from './Tile.styled';

const Tile = ({ children }) => <StyledTile>{children}</StyledTile>;

Tile.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Tile;
