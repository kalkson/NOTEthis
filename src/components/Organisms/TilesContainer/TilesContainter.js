import React, { useState } from 'react';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = () => {
  const [isSecondActive, setSecondActivity] = useState(false);
  const [isThirdActive, setThirdActivity] = useState(false);
  const [activeType, setActiveType] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [activeThirdData, setActiveThirdData] = useState([]);

  const data = {
    notes: {
      active: [
        {
          title: 'Ile lat ma Damian?',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto placeat dignissimos consectetur vitae magnam corporis similique quam, temporibus distinctio?',
        },
      ],
      archived: [
        {
          title: 'Zjadłem dziś bananów 100',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. oris similique quam, temporibus distinctio?',
        },
      ],
    },
    lists: {
      active: [
        {
          title: 'zakupy',
          todos: ['jajka', 'ocet', 'mleko', 'mąka'],
          completed: ['cukier', 'woda', 'bułki'],
        },
        {
          title: 'do zrobienia na dziś',
          todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
        },
      ],
      archived: [
        {
          title: 'do zrobienia na dziś',
          todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
        },
      ],
    },
  };

  const handleClick = (which, type) => {
    switch (which) {
      case 'second': {
        setSecondActivity(true);
        setActiveData(data[type]);
        setActiveType(type);

        break;
      }
      case 'third': {
        setThirdActivity(true);
        setActiveThirdData(type);

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
      <ThirdTile
        isActive={isThirdActive}
        data={activeThirdData}
        type={activeType}
      />
    </StyledTilesContainer>
  );
};

export default TilesContainer;
