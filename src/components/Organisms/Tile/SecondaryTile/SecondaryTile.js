import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import TileButton from 'components/Atoms/TileButton/TileButton';
import List from 'components/Molecules/List/List';
import ListElement from 'components/Atoms/ListElement/ListElement';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import StyledSecondaryTile from './SecondaryTile.styled';
// import Tile from '../Tile';

const SecondaryTile = forwardRef(
  ({ isActive, data, handleClick, type }, ref) => {
    return (
      <StyledSecondaryTile className="second" isActive={isActive} ref={ref}>
        {type === 'lists' ? (
          <TileButton>Stwórz nową listę</TileButton>
        ) : (
          <TileButton>Stwórz nową notatkę</TileButton>
        )}

        <div className="second__list-container">
          <List className="second__active-list">
            {data.active?.map(item => (
              <ListElement key={item.title} type="active-item">
                <button
                  type="button"
                  onClick={() => handleClick('third', item)}
                >
                  {item.title}
                </button>
              </ListElement>
            ))}
          </List>
          <List className="second__archived-list">
            {data.archived?.map(item => (
              <ListElement key={item.title}>
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
};

// export default Tile(SecondaryTile);
export default SecondaryTile;
