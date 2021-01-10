const initState = {
  notes: {
    active: [
      {
        id: 1,
        title: 'Ile lat ma Damian?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto placeat dignissimos consectetur vitae magnam corporis similique quam, temporibus distinctio?',
      },
      {
        id: 2,
        title: 'Mama powiedziała',
        content: 'Nie przejmuj się, bo sama przeyżywała i dobrze wie. Nie płaczę nie przeżywam to luz, plusowy luz',
      },
    ],
    archived: [
      {
        id: 3,
        title: 'Zjadłem dziś bananów 100',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. oris similique quam, temporibus distinctio?',
      },
    ],
  },
  lists: {
    active: [
      {
        id: 1,
        title: 'zakupy',
        todos: ['jajka', 'ocet', 'mleko', 'mąka'],
        completed: ['cukier', 'woda', 'bułki'],
      },
      {
        id: 2,
        title: 'do zrobienia na dziś',
        todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
      },
    ],
    archived: [
      {
        id: 3,
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

    case 'ADD_TODO': {
      return {
        ...state,
        lists: {
          ...state.lists,
          active: [
            {
              title: action.title,
              todos: [],
              completed: [],
            },
            ...state.lists.active,
          ],
        },
      };
    }

    case 'ADD_NOTE': {
      return {
        ...state,
        notes: {
          ...state.notes,
          active: [
            {
              title: action.title,
              content: '',
            },
            ...state.notes.active,
          ],
        },
      };
    }

    case 'MODIFY_TODOS': {
      const { id } = action;
      const { todos } = state.lists.active.find(list => list.id === id);

      const todos2 = todos.map(todo => (todo === action.previousTitle ? action.title : todo));
      const titleToAssign = state.lists.active.find(list => list.id === id).title;

      const active = [
        {
          id,
          title: titleToAssign,
          todos: todos2,
        },
        ...[...state.lists.active].filter(todo => todo.id !== id),
      ];

      return {
        ...state,
        lists: {
          ...state.lists,
          active,
        },
      };
    }

    case 'ADD_TODOS': {
      const { id } = action;
      const { todos } = state.lists.active.find(list => list.id === id);

      todos.push(action.title);
      const titleToAssign = state.lists.active.find(list => list.id === id).title;

      const active = [
        {
          id,
          title: titleToAssign,
          todos,
        },
        ...[...state.lists.active].filter(todo => todo.id !== id),
      ];

      return {
        ...state,
        lists: {
          ...state.lists,
          active,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
