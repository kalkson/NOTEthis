import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import ListElement from 'components/Atoms/ListElement/ListElement';
import List from 'components/Molecules/List/List';
import Avatar from 'components/Molecules/Avatar/Avatar';
import { ReactComponent as SettingsSVG } from '../../../../assets/vector/settings-icon.svg';
import StyledMainTile from './MainTile.styled';
// import Tile from '../Tile';

const SettingsButton = styled.button`
  margin-top: auto;
  background: transparent;
  border: none;
  outline: none;
  width: fit-content;
  font-size: 1.9rem;
  display: flex;
  align-items: center;

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const MainTile = forwardRef(({ handleClick, counters, type }, ref) => {
  // useEffect(() => {
  //   handleReveal();
  // });

  return (
    <StyledMainTile className="main" ref={ref}>
      <Avatar />
      <h2>Cześć, nieznajomy!</h2>
      <Addnotation>
        <a href="http://localhost:3000">Zaloguj się</a> lub{' '}
        <a href="http://localhost:3000">zarejestruj</a>, aby zapisać dane
      </Addnotation>
      <List className="main__list">
        <ListElement
          type="main"
          counter={counters[0]}
          isActive={type === 'notes' ? true : null}
        >
          <button onClick={() => handleClick('second', 'notes')} type="button">
            Notatki
          </button>
        </ListElement>
        <ListElement
          type="main"
          counter={counters[1]}
          isActive={type === 'lists' ? true : null}
        >
          <button onClick={() => handleClick('second', 'lists')} type="button">
            Listy
          </button>
        </ListElement>
      </List>
      <SettingsButton>
        <SettingsSVG />
        Ustawienia
      </SettingsButton>
    </StyledMainTile>
  );
});

MainTile.displayName = 'MainTile';

MainTile.propTypes = {
  handleClick: propTypes.func.isRequired,
  counters: propTypes.shape(propTypes.number),
  type: propTypes.string,
  // handleReveal: propTypes.func.isRequired,
};

MainTile.defaultProps = {
  counters: [0, 0],
  type: null,
};

export default MainTile;
