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
        id: 5,
        title: 'zakupy',
        todos: ['jajka', 'ocet', 'mleko', 'mąka'],
        completed: ['cukier', 'woda', 'bułki'],
      },
      {
        id: 6,
        title: 'do zrobienia na dziś',
        todos: ['Zakupy', 'Umyć się', 'pograć na kompie', 'zjeść obiad'],
        completed: [],
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

      const abc = {
        ...state,
        lists: {
          ...state.lists,
          active: activeLists,
        },
      };

      console.log(abc);

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
              id: Math.floor(Math.random() * (199999 - 19)) + 19,
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
      const actived = state.lists.active.find(list => list.id === id);
      // const completed = state.lists.active.find(list => list.id === id).completed;

      const active = [
        {
          ...actived,
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

      if (todos.find(todo => todo === action.title)) return state;

      todos.push(action.title);
      const actived = state.lists.active.find(list => list.id === id);

      const active = [
        {
          ...actived,
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

    case 'DELETE_TODOS': {
      const { id } = action;
      const { todos } = state.lists.active.find(list => list.id === id);
      const { title, completed } = state.lists.active.find(list => list.id === id);

      const active = [
        {
          id,
          title,
          todos: todos.filter(todo => action.title !== todo),
          completed,
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

    case 'THROW_TODOS': {
      const activeListTmp = state.lists.active.find(list => list.id === action.id);
      const todos = activeListTmp.todos.filter(todo => todo !== action.title);
      const { completed } = activeListTmp;
      completed.unshift(action.title);
      const { title, id } = state.lists.active.find(list => list.id === action.id);

      const active = [
        {
          id,
          title,
          todos,
          completed,
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

    case 'RETURN_TODOS': {
      console.log(action);
      const activeListTmp = state.lists.active.find(list => list.id === action.id);
      const completed = activeListTmp.completed.filter(todo => todo !== action.title);
      const { todos } = activeListTmp;
      todos.unshift(action.title);
      const { title, id } = state.lists.active.find(list => list.id === action.id);

      const active = [
        {
          id,
          title,
          todos,
          completed,
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
      // return state;
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
