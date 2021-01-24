const throwToCompleted = (state, id) => {
  const newCompletedOne = state.lists.active.find(list => list.id === id);
  if (!newCompletedOne.todos.length) {
    const archived = [...state.lists.archived];
    archived.unshift(newCompletedOne);
    const newActive = state.lists.active.filter(list => list.id !== id);

    return {
      ...state,
      lists: {
        active: newActive,
        archived,
      },
    };
  }
  return state;
};

const initState = {
  notes: {
    active: [],
  },
  lists: {
    active: [],
    archived: [],
  },
  name: '',
  userColor: '',
  userImage: '',
};

const dataReducer = (state = initState, action) => {
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
      if (state.lists.active.find(todo => todo.title === action.title))
        return state;

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
      const lists = state.lists.active.find(list => list.title === action.title)
        ? state.lists.active.filter(list => {
            if (list.title !== action.title) {
              return list;
            }

            return null;
          })
        : state.lists.archived.filter(list => {
            if (list.title !== action.title) {
              return list;
            }

            return null;
          });

      return {
        ...state,
        lists: {
          ...state.lists,
          active: state.lists.active.find(list => list.title === action.title)
            ? lists
            : state.lists.active,
          archived: state.lists.archived.find(
            list => list.title === action.title
          )
            ? lists
            : state.lists.archived,
        },
      };
    }

    case 'ADD_TODO': {
      if (action.title === '' || !action.title) return state;
      if (state.lists.active.find(todo => todo.title === action.title))
        return state;

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
      if (action.title === '' || !action.title) return state;
      if (
        state.notes.active.find(
          note => note.title.toLowerCase() === action.title.toLowerCase()
        )
      )
        return state;

      return {
        ...state,
        notes: {
          ...state.notes,
          active: [
            {
              title: action.title,
              content: 'kliknij szybko dwa razy, by edytować',
              id: action.id,
            },
            ...state.notes.active,
          ],
        },
      };
    }

    case 'ADD_NOTES': {
      const tmpNote = state.notes.active.find(note => note.id === action.id);
      if (action.content.toLowerCase() === tmpNote.content.toLowerCase())
        return state;

      const active = state.notes.active.map(note => {
        if (note.id === action.id) {
          return {
            id: action.id,
            title: action.title,
            content: action.content,
          };
        }

        return note;
      });

      return {
        ...state,
        notes: {
          active,
        },
      };
    }

    case 'MODIFY_TODOS': {
      const { id } = action;
      const { todos } = state.lists.active.find(list => list.id === id);

      if (todos.find(todo => todo.toLowerCase() === action.title.toLowerCase()))
        return state;

      const todos2 = todos.map(todo =>
        todo === action.previousTitle ? action.title : todo
      );
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
      const isFine = state.lists.active.find(list => list.id === id) ? 1 : 0;

      const todos =
        isFine === 1
          ? [...state.lists.active.find(list => list.id === id).todos]
          : [...state.lists.archived.find(list => list.id === id).todos];

      if (todos.find(todo => todo.toLowerCase() === action.title.toLowerCase()))
        return state;

      todos.push(action.title);
      const actived =
        isFine === 1
          ? state.lists.active.find(list => list.id === id)
          : state.lists.archived.find(list => list.id === id);

      const active = [
        {
          ...actived,
          todos,
        },
        ...[...state.lists.active].filter(todo => todo.id !== id),
      ];

      const archived = state.lists.archived.filter(
        list => list.id !== action.id
      );

      if (isFine)
        return {
          ...state,
          lists: {
            ...state.lists,
            active,
          },
        };

      return {
        ...state,
        lists: {
          ...state.lists,
          active,
          archived,
        },
      };
    }

    case 'DELETE_TODOS': {
      const { id } = action;
      const { todos } = state.lists.active.find(list => list.id === id);
      const { title, completed } = state.lists.active.find(
        list => list.id === id
      );

      const active = [
        {
          id,
          title,
          todos: todos.filter(todo => action.title !== todo),
          completed,
        },
        ...[...state.lists.active].filter(todo => todo.id !== id),
      ];

      // const tmpState = {
      //   ...state,
      //   lists: {
      //     ...state.lists,
      //     active,
      //   },
      // };

      return {
        ...state,
        lists: {
          ...state.lists,
          active,
        },
      };
      // return throwToCompleted(tmpState, id);
    }

    case 'THROW_TODOS': {
      const activeListTmp = state.lists.active.find(
        list => list.id === action.id
      );
      const todos = activeListTmp.todos.filter(todo => todo !== action.title);
      const completed = [...activeListTmp.completed];
      completed.unshift(action.title);
      const { title, id } = state.lists.active.find(
        list => list.id === action.id
      );

      const active = [
        {
          id,
          title,
          todos,
          completed,
        },
        ...[...state.lists.active].filter(todo => todo.id !== id),
      ];

      // const

      // return () => throwToCompleted();

      const tmpState = {
        ...state,
        lists: {
          ...state.lists,
          active,
        },
      };
      return throwToCompleted(tmpState, id);
    }

    case 'RETURN_TODOS': {
      const activeListTmp =
        state.lists.active.find(list => list.id === action.id) ||
        state.lists.archived.find(list => list.id === action.id);
      const completed = activeListTmp.completed.filter(
        todo => todo !== action.title
      );
      const todos = [...activeListTmp.todos];
      todos.unshift(action.title);
      const { title, id } =
        state.lists.active.find(list => list.id === action.id) ||
        state.lists.archived.find(list => list.id === action.id);

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
          archived:
            activeListTmp.todos.length === 0
              ? state.lists.archived
              : state.lists.archived.filter(list => list.title !== title),
        },
      };
      // return state;
    }

    case 'OVERWRITE_STORE': {
      return action.newState;
    }

    case 'STORE_UPDATED': {
      return state;
    }

    case 'AVATAR_CHANGED': {
      return {
        ...state,
        userImage: action.url,
      };
    }

    case 'ERASE_STORE': {
      return initState;
    }

    case 'COLOR_UPDATED': {
      return {
        ...state,
        userColor: action.color,
      };
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
