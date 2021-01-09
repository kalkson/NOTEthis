const initState = {
  notes: {
    active: [
      {
        title: 'Ile lat ma Damian?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto placeat dignissimos consectetur vitae magnam corporis similique quam, temporibus distinctio?',
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
    case 'FETCH_DATA':
      return [state];
    default: {
      return state;
    }
  }
};

export default rootReducer;
