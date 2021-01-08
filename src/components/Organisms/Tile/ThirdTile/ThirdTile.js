import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import List from 'components/Molecules/List/List';
import ListElement from 'components/Atoms/ListElement/ListElement';
import ListHeadline from 'components/Molecules/ListHeadline/ListHeadline';
import StyledThirdTile from './ThirdTile.styled';
// import Tile from '../Tile';

const ThirdTile = forwardRef(({ isActive, data, type }, ref) => {
  if (type === 'notes')
    return (
      <StyledThirdTile isActive={isActive} ref={ref}>
        <ListHeadline className="third__headline">{data.title}</ListHeadline>
        <p>{data.content}</p>
      </StyledThirdTile>
    );

  if (type === 'lists')
    return (
      <StyledThirdTile isActive={isActive} ref={ref}>
        <ListHeadline className="third__headline">{data.title}</ListHeadline>
        <div className="third__list-container">
          <List className="third__active-list">
            {data.todos?.map(item => (
              <ListElement key={item}>
                <button type="button">{item}</button>
              </ListElement>
            ))}
            <ListElement className="third__add-button">
              <button type="button">dodaj nowe zadanie</button>
            </ListElement>
          </List>

          <List className="third__archived-list">
            {data.completed?.map(item => (
              <ListElement key={item}>
                <button type="button">{item}</button>
              </ListElement>
            ))}
          </List>
        </div>
      </StyledThirdTile>
    );

  return null;
});

ThirdTile.displayName = 'SecondaryTile';

ThirdTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  data: propTypes.shape(
    propTypes.oneOfType([propTypes.shape, propTypes.string])
  ).isRequired,
  type: propTypes.string.isRequired,
};

// export default Tile(ThirdTile);
export default ThirdTile;
