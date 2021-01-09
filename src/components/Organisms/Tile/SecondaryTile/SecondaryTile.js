import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import TileButton from 'components/Atoms/TileButton/TileButton';
import List from 'components/Molecules/List/List';
import ListElement from 'components/Atoms/ListElement/ListElement';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import StyledSecondaryTile from './SecondaryTile.styled';
// import Tile from '../Tile';

const SecondaryTile = forwardRef(
  (
    { isActive, data, handleClick, type, activePosition, setActivePosition },
    ref
  ) => {
    console.log(data);
    return (
      <StyledSecondaryTile className="second" isActive={isActive} ref={ref}>
        {type === 'lists' ? (
          <TileButton>Stwórz nową listę</TileButton>
        ) : (
          <TileButton>Stwórz nową notatkę</TileButton>
        )}

        <div className="second__list-container">
          <List className="second__active-list">
            {data &&
              data.active?.map(item => (
                <ListElement
                  key={item.title}
                  type="active-item"
                  isActive={activePosition === item.title ? true : null}
                >
                  <button
                    type="button"
                    onClick={() => {
                      handleClick('third', item);
                      setActivePosition(item.title);
                    }}
                  >
                    {item.title}
                  </button>
                </ListElement>
              ))}
          </List>
          <List className="second__archived-list">
            {data &&
              data.archived?.map(item => (
                <ListElement
                  key={item.title}
                  type="completed-task"
                  className="second__archived-list__checkedElement"
                >
                  <button
                    type="button"
                    onClick={() => handleClick('third', item)}
                  >
                    {item.title}
                  </button>
                </ListElement>
              ))}
          </List>
        </div>
        <Addnotation className="second__notice">
          Usuń ukończone listy klikając na nie
        </Addnotation>
      </StyledSecondaryTile>
    );
  }
);

SecondaryTile.displayName = 'SecondaryTile';

SecondaryTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  data: propTypes.shape(
    propTypes.oneOfType([propTypes.shape, propTypes.string])
  ).isRequired,
  handleClick: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  activePosition: propTypes.string,
  setActivePosition: propTypes.func.isRequired,
};

SecondaryTile.defaultProps = {
  activePosition: null,
};

// export default Tile(SecondaryTile);
export default SecondaryTile;
