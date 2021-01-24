import React, { useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ColorPicker, { useColor } from 'react-color-palette';

const StyledSettings = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* border-top: solid 1px ${({ theme }) => theme.colors.secondary}; */
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(100%)'};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  background: ${({ theme }) => theme.colors.secondary};
  bottom: 0;
  left: 0;
  align-items: center;

  button {
    border: none;
    outline: none;
    background: transparent;
    font-size: 2rem;
    margin-top: auto;
    margin-bottom: 20%;

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

const Settings = ({ isActive, setSettingsPanelActive }) => {
  const [color, setColor] = useColor('hex', '#121212');
  //   const handleColorChange = colour => {
  //     console.log('asd');
  //     setColor(colour);
  //     document.querySelector('body').style.backgroundColor = colour;
  //   };

  useEffect(() => {
    console.log(color);
    document.querySelector('body').style.backgroundColor = color.hex;
  }, [color]);

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
};

export default Settings;
