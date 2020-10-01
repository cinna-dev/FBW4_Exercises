import React from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
