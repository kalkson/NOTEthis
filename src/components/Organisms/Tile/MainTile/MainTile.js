import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import ListElement from 'components/Atoms/ListElement/ListElement';
import List from 'components/Molecules/List/List';
import Avatar from 'components/Molecules/Avatar/Avatar';
import { ReactComponent as SettingsSVG } from '../../../../assets/vector/settings-icon.svg';
import StyledMainTile from './MainTile.styled';

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

const MainTile = ({ handleClick }) => {
  return (
    <StyledMainTile>
      <Avatar />
      <h2>Cześć, nieznajomy!</h2>
      <Addnotation>
        <a href="http://localhost:3000">Zaloguj się</a> lub{' '}
        <a href="http://localhost:3000">zarejestruj</a>, aby zapisać dane
      </Addnotation>
      <List>
        <ListElement>
          <button onClick={() => handleClick('second', 'notes')} type="button">
            Notatki
          </button>
        </ListElement>
        <ListElement>
          <button onClick={() => handleClick('second', 'lists')} type="button">
            Listy
          </button>
        </ListElement>
        <ListElement>
          <button
            onClick={() => handleClick('second', 'calendar')}
            type="button"
          >
            Kalendarz
          </button>
        </ListElement>
      </List>
      <SettingsButton>
        <SettingsSVG />
        Ustawienia
      </SettingsButton>
    </StyledMainTile>
  );
};

MainTile.propTypes = {
  handleClick: propTypes.func.isRequired,
};

export default MainTile;
