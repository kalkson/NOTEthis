import React, { useState } from 'react';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = () => {
  const [isSecondActive, setSecondActivity] = useState(false);
  const [isThirdActive, setThirdActivity] = useState(false);
  const [activeType, setActiveType] = useState(null);
  const [activeData, setActiveData] = useState([]);

  const data = {
    notes: [
      {
        title: 'Ile lat ma Damian?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto placeat dignissimos consectetur vitae magnam corporis similique quam, temporibus distinctio?',
      },
      {
        title: 'Zjadłem dziś bananów 100',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. oris similique quam, temporibus distinctio?',
      },
    ],
    lists: [
      {
        title: 'zakupy',
        todos: ['jajka', 'ocet', 'mleko', 'mąka'],
      },
      {
        title: 'do zrobienia na dziś',
        todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
      },
    ],
  };

  const handleClick = (which, type) => {
    switch (which) {
      case 'second': {
        setSecondActivity(true);
        setActiveType(type);

        if (activeType === 'notes') setActiveData(data.notes);
        else setActiveData(data.lists);

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
      <SecondaryTile
        isActive={isSecondActive}
        handleClick={handleClick}
        data={activeData}
      />
      <ThirdTile isActive={isThirdActive} />
    </StyledTilesContainer>
  );
};

export default TilesContainer;
