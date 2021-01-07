import React from 'react';
import propTypes from 'prop-types';
import TileButton from 'components/Atoms/TileButton/TileButton';
import StyledSecondaryTile from './SecondaryTile.styled';

const SecondaryTile = ({ isActive }) => {
  console.log('asd');
  return (
    <StyledSecondaryTile isActive={isActive}>
      <TileButton>Stwórz nową listę</TileButton>
    </StyledSecondaryTile>
  );
};

SecondaryTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  //   handleClick: propTypes.func.isRequired,
};

export default SecondaryTile;
