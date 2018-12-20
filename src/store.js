import { createStore, applyMiddleware } from 'redux';
import storage from './firebase/firebaseConfig';
import thunkMiddleware from 'redux-thunk';
