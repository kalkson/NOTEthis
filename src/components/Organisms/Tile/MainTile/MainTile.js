import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import React from 'react';
import StyledMainTile from './MainTile.styled';

const MainTile = () => {
  const madafaka = 1;
  console.log(madafaka);
  return (
    <StyledMainTile>
      <h2>Cześć, nieznajomy!</h2>
      <Addnotation>
        <a href="http://localhost:3000">Zaloguj się</a> lub{' '}
        <a href="http://localhost:3000">zarejestruj</a>, aby zapisać dane
      </Addnotation>
    </StyledMainTile>
  );
};

export default MainTile;
