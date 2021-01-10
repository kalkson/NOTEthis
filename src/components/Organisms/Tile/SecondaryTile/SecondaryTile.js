import React, { forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import TileButton from 'components/Atoms/TileButton/TileButton';
import List from 'components/Molecules/List/List';
import ListInput from 'components/Atoms/ListInput/ListInput';
import { addNote, addTodo } from 'components/store/Actions/actions';
import ListElement from 'components/Atoms/ListElement/ListElement';
import Addnotation from 'components/Atoms/Addnotation/Addnotation';
import StyledSecondaryTile from './SecondaryTile.styled';
// import Tile from '../Tile';

const SecondaryTile = forwardRef(
  ({ isActive, data, handleClick, type, activePosition, setActivePosition, addNoteElement, addTodoElement }, ref) => {
    const [isInputActive, setInputActivity] = useState(false);

    useEffect(() => {
      setInputActivity(false);
    }, [type]);

    const handleAddClick = () => {
      setInputActivity(true);
    };

    const handleSubmit = (e, value) => {
      e.preventDefault();
      if (value === '') return;
      if (type === 'notes') addNoteElement(value);
      if (type === 'lists') addTodoElement(value);
      setInputActivity(false);
    };

    return (
      <StyledSecondaryTile className="second" isActive={isActive} ref={ref}>
        <TileButton onClick={() => handleAddClick()}>Stwórz {type === 'notes' ? 'notatkę' : 'listę'}</TileButton>

        <div className="second__list-container">
          {isInputActive && <ListInput type="headline" handleSubmit={handleSubmit} />}
          <List className="second__active-list">
            {data &&
              data.active?.map(item => (
                <ListElement key={item.title} type="active-item" isActive={activePosition === item.title ? true : null}>
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
                <ListElement key={item.title} type="completed-task" className="second__archived-list__checkedElement">
                  <button type="button" onClick={() => handleClick('third', item)}>
                    {item.title}
                  </button>
                </ListElement>
              ))}
          </List>
        </div>
        <Addnotation className="second__notice">Usuń ukończone listy klikając na nie</Addnotation>
      </StyledSecondaryTile>
    );
  }
);

SecondaryTile.displayName = 'SecondaryTile';

SecondaryTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  data: propTypes.shape(propTypes.oneOfType([propTypes.shape, propTypes.string])).isRequired,
  handleClick: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  activePosition: propTypes.string,
  setActivePosition: propTypes.func.isRequired,
  addNoteElement: propTypes.func.isRequired,
  addTodoElement: propTypes.func.isRequired,
};

SecondaryTile.defaultProps = {
  activePosition: null,
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoElement: value => dispatch(addTodo(value)),
    addNoteElement: value => dispatch(addNote(value)),
  };
};

// export default Tile(SecondaryTile);
export default connect(null, mapDispatchToProps)(SecondaryTile);
