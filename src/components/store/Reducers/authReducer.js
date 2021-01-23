const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed',
      };

    case 'REGISTER_ERROR':
      return {
        ...state,
        authError: 'Register failed failed',
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      };

    case 'SIGNOUT_SUCCESS':
      return state;

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};

export default authReducer;
