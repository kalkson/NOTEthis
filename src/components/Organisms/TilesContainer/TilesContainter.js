import React from 'react';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = () => (
  <StyledTilesContainer>
    <MainTile />
    <SecondaryTile />
    <ThirdTile />
  </StyledTilesContainer>
);

export default TilesContainer;
