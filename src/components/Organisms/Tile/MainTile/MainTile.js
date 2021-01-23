import React, { forwardRef, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import ListElement from 'components/Atoms/ListElement/ListElement';
import List from 'components/Molecules/List/List';
import Login from 'components/Organisms/auth/Login';
import Register from 'components/Organisms/auth/Register';
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
  const [isLoginPanelActive, setLoginPanelActive] = useState(false);
  const [isRegisterPanelActive, setRegisterPanelActive] = useState(false);

  const handleAuthClick = which => {
    if (which === 'login') {
      setLoginPanelActive(true);
      setRegisterPanelActive(false);
    } else {
      setRegisterPanelActive(true);
      setLoginPanelActive(false);
    }
  };

  if (isLoginPanelActive)
    return (
      <StyledMainTile className="main" ref={ref} centered>
        <Login setLoginPanelActive={setLoginPanelActive} />
      </StyledMainTile>
    );

  if (isRegisterPanelActive)
    return (
      <StyledMainTile className="main" ref={ref} centered>
        <Register setRegisterPanelActive={setRegisterPanelActive} />
      </StyledMainTile>
    );

  return (
    <StyledMainTile className="main" ref={ref}>
      <Avatar />
      <h2>Cześć, nieznajomy!</h2>
      <Addnotation>
        <button
          className="main__authButton"
          onClick={() => handleAuthClick('login')}
          type="button"
        >
          Zaloguj się
        </button>{' '}
        lub{' '}
        <button
          className="main__authButton"
          type="button"
          onClick={() => handleAuthClick('regiter')}
        >
          zarejestruj
        </button>
        , aby zapisać dane
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
  counters: propTypes.arrayOf(propTypes.number),
  type: propTypes.arrayOf(
    propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number])
  ),
  // handleReveal: propTypes.func.isRequired,
};

MainTile.defaultProps = {
  counters: [0, 0],
  type: null,
};

export default MainTile;
