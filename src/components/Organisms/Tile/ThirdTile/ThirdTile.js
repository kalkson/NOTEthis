import React from 'react';
import propTypes from 'prop-types';
import List from 'components/Molecules/List/List';
import ListElement from 'components/Atoms/ListElement/ListElement';
import StyledThirdTile from './ThirdTile.styled';

const ThirdTile = ({ isActive, data, type }) => {
  console.log(data?.todos);

  return (
    <StyledThirdTile isActive={isActive}>
      <h3 className="third__headline">{data.title}</h3>
      <div className="third__list-container">
        {type === 'notes' && <p>{data.content}</p>}
        {type === 'lists' && (
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
        )}

        {type === 'lists' && (
          <List className="third__archived-list">
            {data.completed?.map(item => (
              <ListElement key={item}>
                <button type="button">{item}</button>
              </ListElement>
            ))}
          </List>
        )}
      </div>
    </StyledThirdTile>
  );
};

ThirdTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  data: propTypes.shape(
    propTypes.oneOfType([propTypes.shape, propTypes.string])
  ).isRequired,
  type: propTypes.string.isRequired,
};

export default ThirdTile;
