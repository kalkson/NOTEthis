import React from 'react';
import propTypes from 'prop-types';
import StyledSecondaryTile from './SecondaryTile.styled';

const SecondaryTile = ({ isActive }) => {
  console.log('asd');
  return <StyledSecondaryTile isActive={isActive}>asd</StyledSecondaryTile>;
};

SecondaryTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  //   handleClick: propTypes.func.isRequired,
};

export default SecondaryTile;
