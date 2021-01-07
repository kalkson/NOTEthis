import React, { useState } from 'react';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = () => {
  const [isSecondActive, setSecondActivity] = useState(false);
  const [isThirdActive, setThirdActivity] = useState(false);

  const handleClick = which => {
    switch (which) {
      case 'second': {
        setSecondActivity(true);
        break;
      }
      case 'third': {
        setThirdActivity(true);
        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledTilesContainer>
      <MainTile handleClick={handleClick} />
      <SecondaryTile isActive={isSecondActive} handleClick={handleClick} />
      <ThirdTile isActive={isThirdActive} />
    </StyledTilesContainer>
  );
};

export default TilesContainer;
