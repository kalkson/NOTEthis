export const modifyNote = (title, previousTitle) => {
  console.log(previousTitle);
  return {
    type: 'MODIFY_NOTE',
    title,
    previousTitle,
  };
};

export default modifyNote;
