const initState = {
  notes: {
    active: [
      {
        title: 'Ile lat ma Damian?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto placeat dignissimos consectetur vitae magnam corporis similique quam, temporibus distinctio?',
      },
      {
        title: 'Mama powiedziała',
        content:
          'Nie przejmuj się, bo sama przeyżywała i dobrze wie. Nie płaczę nie przeżywam to luz, plusowy luz',
      },
    ],
    archived: [
      {
        title: 'Zjadłem dziś bananów 100',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. oris similique quam, temporibus distinctio?',
      },
    ],
  },
  lists: {
    active: [
      {
        title: 'zakupy',
        todos: ['jajka', 'ocet', 'mleko', 'mąka'],
        completed: ['cukier', 'woda', 'bułki'],
      },
      {
        title: 'do zrobienia na dziś',
        todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
      },
    ],
    archived: [
      {
        title: 'do zrobienia na dziś',
        todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
      },
    ],
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MODIFY_NOTE': {
      const activeNotes = state.notes.active.map(note => {
        if (note.title === action.previousTitle) {
          console.log(action.previousTitle, note.title);
          const { title } = action;

          return {
            ...note,
            title,
          };
        }

        return note;
      });

      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
        },
      };
    }

    case 'MODIFY_TODO': {
      const activeLists = state.lists.active.map(list => {
        if (list.title === action.previousTitle) {
          console.log(action.previousTitle, list.title);
          const { title } = action;

          return {
            ...list,
            title,
          };
        }

        return list;
      });

      return {
        ...state,
        lists: {
          ...state.lists,
          active: activeLists,
        },
      };
    }

    case 'DELETE_NOTE': {
      const activeNotes = state.notes.active.filter(note => {
        if (note.title !== action.title) {
          return note;
        }

        return null;
      });

      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
        },
      };
    }

    case 'DELETE_TODO': {
      const activeLists = state.lists.active.filter(list => {
        if (list.title !== action.title) {
          return list;
        }

        return null;
      });

      return {
        ...state,
        lists: {
          ...state.lists,
          active: activeLists,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
