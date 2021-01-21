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
