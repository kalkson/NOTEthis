import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = () => {
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

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

  const handleReveal = tile => {
    console.log(tile);

    if (tile?.current) {
      const elements = Array.from(tile.current.children);

      elements.forEach(element => {
        console.log(element);
        gsap.fromTo(
          element,
          {
            opacity: 0,
            visibility: 'hidden',
            y: '-25',
          },
          { opacity: 1, visibility: 'visible', y: 0, duration: 0.5, delay: 0.3 }
        );
      });
    }
  };

  const handleClick = (which, type) => {
    switch (which) {
      case 'second': {
        setActiveData([]);
        setSecondActivity(true);
        setActiveData(data[type]);
        setActiveType(type);

        setThirdActivity(false);
        handleReveal(secondRef);

        break;
      }
      case 'third': {
        setActiveThirdData([]);
        setThirdActivity(true);
        setActiveThirdData(type);
        handleReveal(thirdRef);

        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledTilesContainer>
      <MainTile
        isActive={isSecondActive}
        type={activeType}
        handleClick={handleClick}
        counters={[data.notes.active.length, data.lists.active.length]}
      />
      <SecondaryTile
        isActive={isSecondActive}
        handleClick={handleClick}
        data={activeData}
        type={activeType}
        ref={secondRef}
      />
      <ThirdTile
        isActive={isThirdActive}
        data={activeThirdData}
        type={activeType}
        ref={thirdRef}
      />
    </StyledTilesContainer>
  );
};

export default TilesContainer;
