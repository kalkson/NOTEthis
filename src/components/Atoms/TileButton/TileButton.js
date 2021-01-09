import React from 'react';
import propTypes from 'prop-types';
import StyledTileButton from './TileButton.styled';
import { ReactComponent as AddSVG } from '../../../assets/vector/add-icon.svg';

const TileButton = ({ children }) => (
  <StyledTileButton>
    <AddSVG />
    {children}
  </StyledTileButton>
);

TileButton.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default TileButton;
