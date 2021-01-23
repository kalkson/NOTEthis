import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
