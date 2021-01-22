import React, { forwardRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import TileButton from 'components/Atoms/TileButton/TileButton';
import List from 'components/Molecules/List/List';
import ListInput from 'components/Atoms/ListInput/ListInput';
import { addNote, addTodo } from 'components/store/Actions/actions';
import ReturnButton from 'components/Atoms/ReturnButton/ReturnButton';
import ListElement from 'components/Atoms/ListElement/ListElement';
import StyledSecondaryTile from './SecondaryTile.styled';

const SecondaryTile = forwardRef(
  (
    {
      isActive,
      data,
      handleClick,
      type,
      activePosition,
      setActivePosition,
      addNoteElement,
      addTodoElement,
      setSecondActivity,
      setActiveType,
    },
    ref
  ) => {
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
              data.archived?.map(item => {
                return (
                  <ListElement
                    key={item.title}
                    id={item.id}
                    type="completed-task"
                    className="second__archived-list__checkedElement"
                  >
                    <button type="button" onClick={() => handleClick('third', item)}>
                      {item.title}
                    </button>
                  </ListElement>
                );
              })}
          </List>
        </div>
        {/* <Addnotation className="second__notice">Usuń ukończone listy klikając na nie</Addnotation> */}
        <ReturnButton
          onClick={() => {
            setSecondActivity(false);
            setActiveType([]);
          }}
        />
      </StyledSecondaryTile>
    );
  }
);

SecondaryTile.displayName = 'SecondaryTile';

SecondaryTile.propTypes = {
  isActive: propTypes.bool.isRequired,
  data: propTypes.shape(propTypes.oneOfType([propTypes.shape, propTypes.string])),
  handleClick: propTypes.func.isRequired,
  type: propTypes.oneOfType([
    propTypes.shape(propTypes.oneOfType([propTypes.shape, propTypes.string, propTypes.number])),
    propTypes.string,
  ]).isRequired,
  activePosition: propTypes.string,
  setActivePosition: propTypes.func.isRequired,
  setSecondActivity: propTypes.func.isRequired,
  setActiveType: propTypes.func.isRequired,
  addNoteElement: propTypes.func.isRequired,
  addTodoElement: propTypes.func.isRequired,
};

SecondaryTile.defaultProps = {
  activePosition: null,
  data: null,
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoElement: value => dispatch(addTodo(value)),
    addNoteElement: value => dispatch(addNote(value)),
  };
};

// export default Tile(SecondaryTile);
export default connect(null, mapDispatchToProps)(SecondaryTile);
