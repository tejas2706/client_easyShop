import React from 'react';
import 'react-native-gesture-handler';
import Router from './Router';
import createReduxStore from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {

  const store = createReduxStore()
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}


