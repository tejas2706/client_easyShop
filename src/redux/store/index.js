import { createStore } from 'redux';
import allReduces from '../reducers';


export default function createReduxStore(){
  const store = createStore(allReduces);
  return store;
} 
