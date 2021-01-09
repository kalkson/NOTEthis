export const modifyNote = title => {
  return {
    type: 'MODIFY_NOTE',
    title,
  };
};

export default modifyNote;
