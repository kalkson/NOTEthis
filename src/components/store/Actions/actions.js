export const modifyNote = (title, previousTitle) => {
  console.log(previousTitle);
  return {
    type: 'MODIFY_NOTE',
    title,
    previousTitle,
  };
};

export const modifyTodo = (title, previousTitle) => {
  console.log(previousTitle);
  return {
    type: 'MODIFY_TODO',
    title,
    previousTitle,
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
