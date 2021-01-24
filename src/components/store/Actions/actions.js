export const modifyNote = (title, previousTitle) => {
  return {
    type: 'MODIFY_NOTE',
    title,
    previousTitle,
  };
};

export const modifyTodo = (title, previousTitle) => {
  return {
    type: 'MODIFY_TODO',
    title,
    previousTitle,
  };
};

export const modifyTodos = (title, previousTitle, id) => {
  return {
    type: 'MODIFY_TODOS',
    title,
    previousTitle,
    id,
  };
};

export const deleteNote = title => {
  return {
    type: 'DELETE_NOTE',
    title,
  };
};

export const deleteTodo = title => {
  return {
    type: 'DELETE_TODO',
    title,
  };
};

export const addTodo = title => {
  return {
    type: 'ADD_TODO',
    title,
  };
};

export const addTodos = (title, id) => {
  return {
    type: 'ADD_TODOS',
    title,
    id,
  };
};

export const addNote = title => {
  return {
    type: 'ADD_NOTE',
    title,
    id: Math.floor(Math.random() * 1000000000) + 1,
  };
};

export const deleteTodos = (title, id) => {
  return {
    type: 'DELETE_TODOS',
    title,
    id,
  };
};

export const throwTodos = (title, id) => {
  return {
    type: 'THROW_TODOS',
    title,
    id,
  };
};

export const returnTodos = (title, id) => {
  return {
    type: 'RETURN_TODOS',
    title,
    id,
  };
};

export const addNotes = (content, title, id) => {
  return {
    type: 'ADD_NOTES',
    content,
    id,
    title,
  };
};

export const overwriteStore = fbData => {
  return {
    type: 'OVERWRITE_STORE',
    newState: fbData,
  };
};

export const sendToFirebase = (store, uid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    firestore
      .collection('userData')
      .doc(uid)
      .set(store)
      .then(() => {
        dispatch({ type: 'STORE_UPDATED' });
      });
  };
};

export const modifyColor = color => {
  return dispatch => {
    dispatch({ type: 'COLOR_UPDATED', color: color.hex });
  };
};

export const eraseStoreAfterSignOut = () => {
  return dispatch => {
    dispatch({ type: 'ERASE_STORE' });
  };
};

export const changeAvatar = image => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const storage = firebase.storage();

    const { id } = getState().data;

    storage
      .ref(`files/${id}.${image.name.split('.')[1]}`)
      .put(image)
      .then(() => {
        storage
          .ref(`files`)
          .child(`${id}.${image.name.split('.')[1]}`)
          .getDownloadURL()
          .then(url => {
            dispatch({ type: 'AVATAR_CHANGED', url });
          });
      });
  };
};
