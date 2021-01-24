import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ColorPicker, { useColor } from 'react-color-palette';
import { modifyColor } from 'components/store/Actions/actions';
import { connect } from 'react-redux';

const StyledSettings = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(100%)'};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  background: ${({ theme }) => theme.colors.secondary};
  bottom: 0;
  left: 0;
  /* align-items: center; */
  font-size: 2.5rem;

  h4 {
    margin: 0;
    margin-bottom: 10px;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    font-size: 2rem;
    margin-top: auto;
    margin-bottom: 20%;
    width: fit-content;

    @media (min-width: 1024px) {
      margin-bottom: 10%;
    }
  }

  .rcp-light {
    display: flex;
  }

  .rcp-dark {
    display: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.9rem;

    .rcp-dark {
      display: flex;
    }

    .rcp-light {
      display: none;
    }
  }

  .rcp-fields {
    display: none;
  }

  transition: transform 300ms cubic-bezier(0.61, -0.19, 0.7, -0.11),
    opacity 300ms ease-in-out;
`;

const Settings = ({
  isActive,
  setSettingsPanelActive,
  modifyUserColor,
  previousColor,
}) => {
  const [color, setColor] = useColor('hex', previousColor || '#000000');
  const [t, setT] = useState(null);
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = color.hex;

    if (color.hex !== '#000000') {
      clearTimeout(t);
      setT(setTimeout(() => modifyUserColor(color), 500));
    }
  }, [color, previousColor]);

  return (
    <StyledSettings isActive={isActive}>
      <h2>Ustawienia</h2>
      <h4>Motyw:</h4>
      <ColorPicker
        width={156}
        height={100}
        color={color}
        onChange={setColor}
        dark
      />
      <ColorPicker
        width={300}
        height={200}
        color={color}
        onChange={setColor}
        fair
      />
      <button
        type="button"
        onClick={() => {
          setSettingsPanelActive(false);
        }}
      >
        Wróć
      </button>
    </StyledSettings>
  );
};

Settings.propTypes = {
  isActive: propTypes.bool.isRequired,
  setSettingsPanelActive: propTypes.func.isRequired,
  modifyUserColor: propTypes.func.isRequired,
  previousColor: propTypes.string,
};

Settings.defaultProps = {
  previousColor: null,
};

const mapDispatchToProps = dispatch => {
  return { modifyUserColor: color => dispatch(modifyColor(color)) };
};

export default connect(null, mapDispatchToProps)(Settings);
